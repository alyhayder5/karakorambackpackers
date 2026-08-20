import json
from pathlib import Path
from collections import Counter

path = Path(r"E:\karakorambackpackers\.wpress-extract\database.sql")
posts_path = Path(r"E:\karakorambackpackers\.wpress-extract\posts_summary.json")
posts = json.loads(posts_path.read_text(encoding="utf-8"))

print("ALL pages (any status):")
for p in posts:
    if p["type"] == "page":
        print(f"{p['id']:>6}  {p['status']:<12}  {p['slug']:<55}  {p['title'][:90]}  parent={p['parent']}")

print("\nALL types with status:")
c = Counter((p["type"], p["status"]) for p in posts)
for k, v in sorted(c.items()):
    print(f"  {k}: {v}")

print("\nAttachments sample (first 40):")
n = 0
for p in posts:
    if p["type"] == "attachment":
        print(f"{p['id']:>6}  {p['mime']:<20}  {p['slug']:<50}  {p['guid'][-80:]}")
        n += 1
        if n >= 40:
            break

print("\nElementor library:")
for p in posts:
    if p["type"] == "elementor_library":
        print(f"{p['id']:>6}  {p['status']:<12}  {p['slug']:<55}  {p['title'][:90]}")
