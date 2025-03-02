import os
from PIL import Image

# Correct path to the image
source_image = "public/favicon.png"

# Ensure the file exists
if not os.path.exists(source_image):
    print(f"Error: {source_image} not found.")
    exit(1)

# Open the image
img = Image.open(source_image).convert("RGBA")

# Define output sizes
sizes = {
    "favicon-16x16.png": (16, 16),
    "favicon-32x32.png": (32, 32),
    "apple-touch-icon.png": (180, 180),
    "android-chrome-192x192.png": (192, 192),
    "android-chrome-512x512.png": (512, 512)
}

# Create output directory
output_dir = "public/icons"
os.makedirs(output_dir, exist_ok=True)

# Generate and save resized icons
for filename, size in sizes.items():
    resized_img = img.resize(size)
    resized_img.save(os.path.join(output_dir, filename), format="PNG")
    print(f"Generated: {filename}")

print("\n✅ Icons generated successfully in 'public/icons/'")