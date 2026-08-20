import json
from collections import Counter
from pathlib import Path

path = Path(r"E:\karakorambackpackers\.wpress-extract\database.sql")
out_path = Path(r"E:\karakorambackpackers\.wpress-extract\posts_summary.json")


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


def row_to_post(fields):
    return {
        "id": fields[0],
        "title": (fields[5] or "")[:300],
        "slug": fields[11] or "",
        "type": fields[20] or "",
        "status": fields[7] or "",
        "date": fields[2] or "",
        "excerpt": (fields[6] or "")[:500],
        "parent": fields[17],
        "guid": fields[18] or "",
        "content_len": len(fields[4] or ""),
        "mime": fields[21] or "",
    }


posts = []
collecting = False
chunk_parts = []

with path.open("r", encoding="utf-8", errors="replace") as f:
    for line in f:
        if not collecting:
            if "INSERT INTO `SERVMASK_PREFIX_posts`" in line:
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
                try:
                    posts.append(row_to_post(fields))
                except Exception:
                    pass
                if pos >= len(s) or s[pos] == ";":
                    break
            collecting = False
            chunk_parts = []

out_path.write_text(json.dumps(posts, indent=2), encoding="utf-8")
print("post count", len(posts))
print("types", dict(Counter(p["type"] for p in posts)))
skip = {
    "revision",
    "nav_menu_item",
    "attachment",
    "customize_changeset",
    "oembed_cache",
    "wp_global_styles",
    "wp_navigation",
    "wp_template",
    "wp_template_part",
    "wp_font_face",
    "wp_font_family",
    "elementor_snippet",
    "elementor_library",
    "elementor_font",
    "elementor_icons",
}
print("--- published content ---")
for p in posts:
    if p["status"] == "publish" and p["type"] not in skip:
        print(
            f"{p['id']:>6}  {p['type']:<18}  {p['slug']:<55}  {p['title'][:90]}"
        )
