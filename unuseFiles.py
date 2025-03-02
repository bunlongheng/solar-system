import os
import re

# Directories to scan for assets (update as needed)
ASSET_DIRS = ["public", "styles", "textures", "icons", "music"]

# File extensions to check for references in code
CODE_EXTENSIONS = (".tsx", ".ts", ".js", ".jsx", ".json", ".css", ".scss", ".html", ".mjs", ".md")

# Collect all asset files
asset_files = []
for asset_dir in ASSET_DIRS:
    for root, _, files in os.walk(asset_dir):
        for file in files:
            asset_files.append(os.path.join(root, file))

# Convert paths to relative format (e.g., "public/favicon.png")
asset_files = [f.replace("\\", "/") for f in asset_files]

# Scan for asset references in code files
used_assets = set()
for root, _, files in os.walk("."):
    for file in files:
        if file.endswith(CODE_EXTENSIONS):
            file_path = os.path.join(root, file)
            with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()
                for asset in asset_files:
                    asset_relative = asset.replace("public/", "/")  # Match imports like "/favicon.png"
                    asset_name = os.path.basename(asset)  # Match by filename alone
                    if re.search(re.escape(asset_relative), content) or re.search(re.escape(asset_name), content):
                        used_assets.add(asset)

# Find unused assets
unused_assets = set(asset_files) - used_assets

# Print results
if unused_assets:
    print("\n🚨 Unused Assets Found:")
    for asset in unused_assets:
        print(f"- {asset}")
else:
    print("\n✅ No unused assets found!")

print("\nScan Complete.")



# ➜  solar-system git:(main) ✗ /opt/homebrew/bin/python3 /Users/bheng/Sites/solar-system/unuseFiles.py

# 🚨 Unused Assets Found:
# - public/vercel.svg
# - public/window.svg
# - public/.DS_Store
# - public/favicon.png
# - public/file.svg
# - public/globe.svg
# - public/textures/.DS_Store

# Scan Complete.