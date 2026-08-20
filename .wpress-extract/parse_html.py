"""Parse WP HTML dumps into structured JSON for the Next.js site."""
import json
import re
from html import unescape
from pathlib import Path

out_dir = Path(r"E:\karakorambackpackers\.wpress-extract")


def strip_tags(html: str) -> str:
    html = re.sub(r"<br\s*/?>", "\n", html, flags=re.I)
    html = re.sub(r"</(p|div|h[1-6]|li|tr)>", "\n", html, flags=re.I)
    html = re.sub(r"<li[^>]*>", "- ", html, flags=re.I)
    html = re.sub(r"<[^>]+>", "", html)
    html = unescape(html)
    html = html.replace("\xa0", " ").replace("\u00a0", " ")
    html = re.sub(r"[ \t]+", " ", html)
    html = re.sub(r"\n[ \t]+", "\n", html)
    html = re.sub(r"\n{3,}", "\n\n", html)
    return html.strip()


def extract_imgs(html: str) -> list[str]:
    urls = re.findall(r'src="(https://karakorambackpackers\.com/wp-content/uploads/[^"]+)"', html)
    seen = []
    for u in urls:
        if u not in seen:
            seen.append(u)
    return seen


def parse_itinerary(text: str):
    days = []
    # Split on Day N patterns
    parts = re.split(r"(?i)(?:^|\n)\s*(Day\s+\d+\s*:?[^\n]*)", text)
    if len(parts) < 3:
        return days
    # parts[0] is preamble; then title, body, title, body...
    i = 1
    while i + 1 < len(parts):
        title = parts[i].strip(" :-")
        body = parts[i + 1].strip()
        # stop body at next major section
        for stop in (
            "Trek Location",
            "Gallery Of Our Tours",
            "Terms & Conditions",
            "Watch complete",
        ):
            idx = body.find(stop)
            if idx != -1:
                body = body[:idx].strip()
        # extract day number
        m = re.match(r"(?i)Day\s+(\d+)\s*:?\s*(.*)", title)
        if m:
            num = int(m.group(1))
            rest = m.group(2).strip(" :-")
            # first line of body might continue title
            lines = [ln.strip(" -") for ln in body.split("\n") if ln.strip()]
            desc_lines = []
            for ln in lines:
                if ln.lower().startswith("day "):
                    break
                if ln in ("Itinerary",):
                    continue
                desc_lines.append(ln)
            days.append({
                "day": num,
                "title": rest or (desc_lines[0] if desc_lines else f"Day {num}"),
                "description": " ".join(desc_lines[:12]),
            })
        i += 2
    return days


def parse_tour_html(pid: int, slug: str, title: str, html: str):
    text = strip_tags(html)
    imgs = extract_imgs(html)

    # price
    price = None
    price_raw = None
    m = re.search(r"(?i)(?:Price\s*)?(\d+k(?:-\d+k)?|\d+\s*\$|\$\s*\d+|\d+\$)", text)
    # more specific: "500$" or "1800$ per person" or "40k per person"
    for pat in [
        r"(\d+)\s*\$\s*per person",
        r"(\d+)\s*\$",
        r"(\d+)k\s*per person",
        r"(\d+k-\d+k)",
        r"(\d+)k",
    ]:
        m = re.search(pat, text, re.I)
        if m:
            price_raw = m.group(0)
            break

    duration = None
    m = re.search(r"(?i)Duration\s*\n?\s*([^\n]+)", text)
    if m:
        duration = m.group(1).strip()
    else:
        m = re.search(r"(\d+\s*(?:–|-)?\s*\d*\s*Days?(?:\s*Tour)?)", text)
        if m:
            duration = m.group(1).strip()

    difficulty = None
    m = re.search(r"(?i)Difficulty\s*\n?\s*([^\n]+)", text)
    if m:
        difficulty = m.group(1).strip()

    group = None
    m = re.search(r"(?i)Group\s*\n?\s*([^\n]+)", text)
    if m:
        group = m.group(1).strip()

    height = None
    m = re.search(r"(?i)Height\s*\n?\s*([^\n]+)", text)
    if m:
        height = m.group(1).strip()

    location = None
    m = re.search(r"(?i)((?:Fairy Meadows|Hunza|Khaplu|Skardu|Gilgit|Kalash|Shimshal|Chitral|Darel)[^,\n]*,\s*[^.\n]+)", text)
    if m:
        location = m.group(1).strip()

    included = []
    excluded = []
    inc_m = re.search(r"(?i)(?:What's included|What.?s included|Included)(.*?)(?:What's not|What.?s not|Excluded|Itinerary)", text, re.S)
    if inc_m:
        included = [ln[2:].strip() if ln.startswith("- ") else ln.strip()
                    for ln in inc_m.group(1).split("\n") if ln.strip().startswith("-")]
    exc_m = re.search(r"(?i)(?:What's not included|What.?s not included|Excluded)(.*?)(?:Itinerary|Trek Location|Gallery)", text, re.S)
    if exc_m:
        excluded = [ln[2:].strip() if ln.startswith("- ") else ln.strip()
                    for ln in exc_m.group(1).split("\n") if ln.strip().startswith("-")]

    overview = ""
    ov = re.search(r"(?i)Overview\s*\n+(.*?)(?:\n-\s|Itinerary|What's included)", text, re.S)
    if ov:
        overview = re.sub(r"\s+", " ", ov.group(1)).strip()[:1500]

    itinerary = parse_itinerary(text)

    return {
        "wp_id": pid,
        "slug": slug,
        "title": title,
        "price_raw": price_raw,
        "duration": duration,
        "difficulty": difficulty,
        "group": group,
        "height": height,
        "location": location,
        "overview": overview,
        "included": included,
        "excluded": excluded,
        "itinerary": itinerary,
        "images": imgs,
        "text_preview": text[:2500],
    }


pages = json.loads((out_dir / "pages_lite.json").read_text(encoding="utf-8"))

tour_ids = [320, 382, 398, 569, 571, 573, 575, 577, 579]
tours = []
for pid in tour_ids:
    p = pages[str(pid)]
    html = (out_dir / f"content_{pid}.html").read_text(encoding="utf-8")
    tours.append(parse_tour_html(pid, p["slug"], p["title"], html))

(out_dir / "parsed_tours.json").write_text(json.dumps(tours, indent=2, ensure_ascii=False), encoding="utf-8")

# homepage extras
home = strip_tags((out_dir / "content_18.html").read_text(encoding="utf-8"))
(out_dir / "home_text.txt").write_text(home, encoding="utf-8")
home_imgs = extract_imgs((out_dir / "content_18.html").read_text(encoding="utf-8"))
(out_dir / "home_images.json").write_text(json.dumps(home_imgs, indent=2), encoding="utf-8")

team_html = (out_dir / "content_81.html").read_text(encoding="utf-8")
(out_dir / "team_text.txt").write_text(strip_tags(team_html), encoding="utf-8")
(out_dir / "team_images.json").write_text(json.dumps(extract_imgs(team_html), indent=2), encoding="utf-8")

team2 = (out_dir / "content_109.html").read_text(encoding="utf-8")
(out_dir / "team_library_text.txt").write_text(strip_tags(team2), encoding="utf-8")

pricing = (out_dir / "content_115.html").read_text(encoding="utf-8")
(out_dir / "pricing_text.txt").write_text(strip_tags(pricing), encoding="utf-8")

print("tours", len(tours))
for t in tours:
    print(f"- {t['slug']}: price={t['price_raw']} dur={t['duration']} diff={t['difficulty']} days={len(t['itinerary'])} imgs={len(t['images'])} loc={t['location']}")
print("home imgs", len(home_imgs))
print("team imgs", len(extract_imgs(team_html)))
