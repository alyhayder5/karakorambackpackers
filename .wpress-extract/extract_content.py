"""Extract page HTML + Elementor JSON + comments + attachments from WP dump."""
import json
import re
from pathlib import Path

path = Path(r"E:\karakorambackpackers\.wpress-extract\database.sql")
out_dir = Path(r"E:\karakorambackpackers\.wpress-extract")

PAGE_IDS = {
    18, 81, 88, 320, 382, 398, 569, 571, 573, 575, 577, 579, 555, 557,
    14, 55, 74, 98, 109, 115, 328,
}


def parse_sql_values(s, start=0):
    i = s.find("(", start)
    if i < 0:
        return None, start
    i += 1
    fields = []
    n = len(s)
    while i < n:
        while i < n and s[i] in " \t\r\n":
            i += 1
        if i >= n:
            break
        if s[i] == ")":
            return fields, i + 1
        if s.startswith("NULL", i) and (i + 4 == n or s[i + 4] in ",)"):
            fields.append(None)
            i += 4
        elif s[i] == "'":
            i += 1
            buf = []
            while i < n:
                ch = s[i]
                if ch == "\\":
                    i += 1
                    if i < n:
                        esc = s[i]
                        mapping = {"n": "\n", "r": "\r", "t": "\t", "0": "\0"}
                        buf.append(mapping.get(esc, esc))
                        i += 1
                    continue
                if ch == "'":
                    if i + 1 < n and s[i + 1] == "'":
                        buf.append("'")
                        i += 2
                        continue
                    i += 1
                    break
                buf.append(ch)
                i += 1
            fields.append("".join(buf))
        else:
            j = i
            while j < n and s[j] not in ",)":
                j += 1
            fields.append(s[i:j].strip())
            i = j
        while i < n and s[i] in " \t\r\n":
            i += 1
        if i < n and s[i] == ",":
            i += 1
            continue
        if i < n and s[i] == ")":
            return fields, i + 1
    return fields, i


def iter_inserts(table_name):
    needle = f"INSERT INTO `{table_name}`"
    collecting = False
    chunk_parts = []
    with path.open("r", encoding="utf-8", errors="replace") as f:
        for line in f:
            if not collecting:
                if needle in line:
                    collecting = True
                    chunk_parts = [line]
                continue
            chunk_parts.append(line)
            if line.strip().endswith(";"):
                chunk = "".join(chunk_parts)
                idx = chunk.find("VALUES")
                s = chunk[idx + 6 :]
                pos = 0
                while True:
                    fields, pos = parse_sql_values(s, pos)
                    if fields is None or not fields:
                        break
                    while pos < len(s) and s[pos] in " \t\r\n,":
                        pos += 1
                    yield fields
                    if pos >= len(s) or s[pos] == ";":
                        break
                collecting = False
                chunk_parts = []


pages = {}
attachments = []
print("Extracting posts...")
for fields in iter_inserts("SERVMASK_PREFIX_posts"):
    try:
        pid = int(fields[0])
        ptype = fields[20] or ""
    except Exception:
        continue
    if ptype == "attachment":
        attachments.append({
            "id": pid,
            "title": fields[5] or "",
            "slug": fields[11] or "",
            "guid": fields[18] or "",
            "mime": fields[21] or "",
            "parent": fields[17],
        })
    if pid in PAGE_IDS:
        pages[pid] = {
            "id": pid,
            "title": fields[5] or "",
            "slug": fields[11] or "",
            "type": ptype,
            "status": fields[7] or "",
            "date": fields[2] or "",
            "excerpt": fields[6] or "",
            "content": fields[4] or "",
            "guid": fields[18] or "",
            "meta": {},
        }

print("pages extracted", list(pages.keys()))
print("attachments", len(attachments))

print("Extracting postmeta...")
wanted_keys = {
    "_elementor_data",
    "_thumbnail_id",
    "_elementor_page_settings",
    "_yoast_wpseo_metadesc",
    "_yoast_wpseo_title",
    "_elementor_template_type",
}
meta_count = 0
for fields in iter_inserts("SERVMASK_PREFIX_postmeta"):
    try:
        post_id = int(fields[1])
        key = fields[2]
        value = fields[3]
    except Exception:
        continue
    if post_id in pages and key in wanted_keys:
        pages[post_id]["meta"][key] = value
        meta_count += 1
print("meta rows kept", meta_count)

print("Extracting comments...")
comments = []
for fields in iter_inserts("SERVMASK_PREFIX_comments"):
    try:
        approved = fields[10]
        comment_type = fields[14] or "comment"
        if str(approved) != "1":
            continue
        comments.append({
            "id": fields[0],
            "post_id": fields[1],
            "author": fields[2],
            "email": fields[3],
            "content": fields[8],
            "date": fields[6],
            "type": comment_type,
        })
    except Exception:
        continue
print("approved comments", len(comments))

print("Extracting options (subset)...")
option_keys = {
    "blogname", "blogdescription", "siteurl", "home",
    "admin_email",
}
options = {}
# also grab anything with phone/email/address keywords
for fields in iter_inserts("SERVMASK_PREFIX_options"):
    try:
        key = fields[1]
        value = fields[2]
    except Exception:
        continue
    if key in option_keys:
        options[key] = value
    elif key in ("widget_text", "widget_custom_html", "sidebars_widgets"):
        options[key] = value[:5000] if value else value

print("Extracting terms...")
terms = []
for fields in iter_inserts("SERVMASK_PREFIX_terms"):
    terms.append({"id": fields[0], "name": fields[1], "slug": fields[2]})
tax = []
for fields in iter_inserts("SERVMASK_PREFIX_term_taxonomy"):
    tax.append({
        "id": fields[0], "term_id": fields[1], "taxonomy": fields[2],
        "description": (fields[3] or "")[:500], "parent": fields[4], "count": fields[5],
    })
print("terms", len(terms), "tax", len(tax))

# Write outputs
(out_dir / "attachments.json").write_text(json.dumps(attachments, indent=2), encoding="utf-8")
(out_dir / "comments.json").write_text(json.dumps(comments, indent=2), encoding="utf-8")
(out_dir / "options.json").write_text(json.dumps(options, indent=2), encoding="utf-8")
(out_dir / "terms.json").write_text(json.dumps({"terms": terms, "tax": tax}, indent=2), encoding="utf-8")

# Pages without huge elementor dump in one file; elementor separate
pages_lite = {}
for pid, p in pages.items():
    el = p["meta"].get("_elementor_data")
    lite = {k: v for k, v in p.items() if k != "meta"}
    lite["meta"] = {k: v for k, v in p["meta"].items() if k != "_elementor_data"}
    lite["has_elementor"] = bool(el)
    lite["elementor_len"] = len(el) if el else 0
    pages_lite[str(pid)] = lite
    if el:
        (out_dir / f"elementor_{pid}.json").write_text(el, encoding="utf-8")
    (out_dir / f"content_{pid}.html").write_text(p["content"] or "", encoding="utf-8")

(out_dir / "pages_lite.json").write_text(json.dumps(pages_lite, indent=2), encoding="utf-8")
print("done")
