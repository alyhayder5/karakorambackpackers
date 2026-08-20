"""Extract selected images from the .wpress archive into public/."""
import os
import shutil
from pathlib import Path

wpress = r"c:\Users\Developer\Downloads\karakorambackpackers-com-20260803-181109-p867loxm6ka1.wpress"
public = Path(r"E:\karakorambackpackers\public")
HEADER = 255 + 14 + 12 + 4096

# dest relative to public, keyed by archive basename (last path component)
MAP = {
    # Brand
    "Karakoram-Backpackers-Logo-A-Travel-Company-Based-in-Gilgit-Baltistan-Pakistan.png": "karakoram-backpackers-logo.png",
    "cropped-Karakoram-Backpackers-Logo-A-Travel-Company-Based-in-Gilgit-Baltistan-Pakistan.png": "brand/logo-mark.png",
    # Founders / why choose
    "Ali-Shan-Founder-Management-Head-of-Karakoram-Backpackers.jpg": "why-choose-us/ali-shan.jpeg",
    "Zahid-Hussain-CEO-and-Tour-Operator.jpg": "why-choose-us/zahid-hussain.jpeg",
    # Team
    "Dr.-Nabeel-Hussain-Expedition-Doctor.jpg": "team/dr-nabeel-hussain.jpg",
    "Ikhlaq-Hussain-Senior-Trip-Leader.jpg": "team/ikhlaq-hussain.jpg",
    "Zahoor-Mehdi-Senior-Tour-Guide.jpg": "team/zahoor-mehdi.jpg",
    "Rehan-Shango-Off-Roading-Expert-And-Tour-Guide.jpg": "team/rehan-shango.jpg",
    "Tour-Guide-for-Gilgit-And-Skardu-Region.jpg": "team/zameer-abbas.jpg",
    "Hasnain-Fida-Tour-Guide-for-Nagar-and-Hunza-Valley.jpg": "team/hasnain-fida.jpg",
    "Senior-Tour-Guide-for-Lahore-Region.jpg": "team/hammad-faiz.jpg",
    "Sumaira-Senior-Trip-Leader.jpg": "team/sumaira.jpg",
    # Destinations / explore
    "Kutwal-Valley-Haramosh.jpg": "destinations/kutwal-valley.jpg",
    "Haramosh-Peak.jpg": "destinations/haramosh-peak.jpg",
    "Naltar-Valley.jpg": "destinations/naltar-valley.jpg",
    "Kutwal-trek.jpg": "destinations/kutwal-trek.jpg",
    "Passu-Cones-Hunza.jpg": "destinations/passu-cones.jpg",
    "Skardu-Blind-Lake.jpg": "destinations/skardu-blind-lake.jpg",
    # Tour heroes
    "a70ccf78-3f49-4f62-a336-7a1201a90593.jpeg": "tours/fairy-meadows.jpeg",
    "d62ece2b-0190-4c8f-a421-f5f57c650a62.jpeg": "tours/fairy-meadows-2.jpeg",
    "IMG_9089.jpg": "tours/fairy-meadows-3.jpg",
    "875fa2d1-e99c-4d95-b10b-67e170869077.jpeg": "tours/gilgit-skardu-fairymeadows.jpeg",
    "bee0c60f-0a69-46ed-80e3-be1369d1f199.jpeg": "tours/gilgit-skardu-2.jpeg",
    "d92e8113-bff3-43e8-8715-3af4e66437ca.jpeg": "tours/gilgit-skardu-3.jpeg",
    "3569f376-de9e-41fc-b233-1cfdaad7e1d6.jpeg": "tours/hunza-valley.jpeg",
    "8154d04b-1838-4ac3-bf77-d172fc7d5420.jpeg": "tours/hunza-valley-2.jpeg",
    "shyok-.jpg": "tours/shyok-winter-festival.jpg",
    "ab997204-24c7-4eda-b047-d2e3a0d71943.jpeg": "tours/hunza-winter.jpeg",
    "30be7d6c-4d50-4a6a-a44b-0f033872638b.jpeg": "tours/mayfung.jpeg",
    "3441d6a5-33cb-457c-8255-3f1d600699f1.jpeg": "tours/mayfung-2.jpeg",
    "5124b2f5-f570-449e-9f98-cb3187bce012.jpeg": "tours/mayfung-3.jpeg",
    "5b704452-e4dd-453d-9623-68a793d05018.jpeg": "gallery/01.jpeg",
    "32dc13c1-03fe-4e7e-817d-a2e3bc3c93d3.jpeg": "gallery/02.jpeg",
    "91b1be6d-b2c3-4b7d-80b6-55c99f1e5be7.jpeg": "gallery/03.jpeg",
    "451a347c-93e5-41d6-b4c3-fe01c222fb1c.jpeg": "gallery/04.jpeg",
    "8229699d-b515-45c8-af6c-84abed6cd3e9.jpeg": "gallery/05.jpeg",
    "b7627c03-5e2c-46d1-b9ad-621985460e66.jpeg": "gallery/06.jpeg",
    "c8078d88-e537-40ca-a283-fe4aaa437449.jpeg": "gallery/07.jpeg",
    "e1a517a4-bbcf-4436-8fe6-28337591684d-1.jpeg": "gallery/08.jpeg",
    "1fb3d5ca-546f-46e4-ac37-a379799f75f6.jpeg": "gallery/09.jpeg",
    "71ce98dd-6c58-418d-855a-019f9b8beb99.jpeg": "gallery/10.jpeg",
    "336aee02-5d58-417b-9a11-c18e37c81a14.jpeg": "gallery/11.jpeg",
    "650c6b71-3c48-40b8-8588-5f33897c3129.jpeg": "gallery/12.jpeg",
    "a157559e-6739-4585-b81d-6f41ff5e78b3.jpeg": "gallery/13.jpeg",
    "481051200_1048164420665264_8362273576581253299_n.jpg": "gallery/14.jpg",
    "IMG_3386.jpg": "gallery/15.jpg",
    "IMG_3425.jpg": "gallery/16.jpg",
    "IMG_0186.jpg": "gallery/17.jpg",
    "IMG_0205.jpg": "gallery/18.jpg",
    "IMG_8246.jpg": "gallery/19.jpg",
    "pic.jpeg": "gallery/20.jpeg",
    "4b3e015a-3868-4984-b3f0-5cdf72ebf7e0.jpeg": "tours/shimshal.jpeg",
    "888cc141-3ecb-457f-9c4b-bd820a03a14c.jpeg": "tours/kalash.jpeg",
    "03ffe9a0-7cbc-4efa-bc1f-07c60dd8c4a5.jpeg": "tours/darel.jpeg",
    "aa39baa2-6f76-4e8a-bf10-da46670bc4e6.jpeg": "tours/hunza-extra.jpeg",
    "13b1d3f2-259c-4fe6-92c9-ab3cb4a5bb39.jpeg": "gallery/21.jpeg",
    "584fcd7a-c2bb-45ea-9b7d-7a35ccefd4ed.jpeg": "gallery/22.jpeg",
    "3723.jpg": "gallery/23.jpg",
    "IMG_0204-1.jpg": "gallery/24.jpg",
    # Testimonial faces used on WP (stock, but original site assets)
    "man-wearing-white-blank-t-shirt-5WTJHZZ.jpg": "testimonials/daniel.jpg",
    "man-in-a-white-t-shirt-and-white-hat-against-the-b-AUMXLKH.jpg": "testimonials/john.jpg",
    "young-stylish-sound-producer-working-in-modern-rec-UQE8S3R.jpg": "testimonials/usman.jpg",
    "close-up-cheerful-enthusiastic-asian-man-with-pier-MKFFC6N.jpg": "testimonials/haris.jpg",
    "mature-man-fishing-by-lake-26H6XXG.jpg": "testimonials/extra-1.jpg",
}

wanted_names = set(MAP.keys())
found = {}

print("scanning archive for", len(wanted_names), "files...")
with open(wpress, "rb") as f:
    while True:
        hdr = f.read(HEADER)
        if len(hdr) < HEADER:
            break
        name = hdr[0:255].split(b"\x00", 1)[0].decode("utf-8", "replace")
        size_s = hdr[255:269].split(b"\x00", 1)[0].decode("ascii", "replace").strip()
        prefix = hdr[281:281 + 4096].split(b"\x00", 1)[0].decode("utf-8", "replace")
        if not name:
            break
        size = int(size_s)
        if name in wanted_names and name not in found:
            dest_rel = MAP[name]
            dest = public / dest_rel
            dest.parent.mkdir(parents=True, exist_ok=True)
            print(f"  extract {name} -> {dest_rel} ({size} bytes)")
            with dest.open("wb") as out:
                remaining = size
                while remaining:
                    chunk = f.read(min(remaining, 8 * 1024 * 1024))
                    if not chunk:
                        break
                    out.write(chunk)
                    remaining -= len(chunk)
            found[name] = dest_rel
            if set(found) == wanted_names:
                break
        else:
            f.seek(size, 1)

missing = sorted(wanted_names - set(found))
print("extracted", len(found))
print("missing", missing)
