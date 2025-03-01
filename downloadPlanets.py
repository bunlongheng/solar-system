import os
import subprocess

# Base URL for the textures
base_url = "https://www.solarsystemscope.com/textures/download/2k_{planet}.jpg"

# List of planets (and other celestial bodies)
planets = [
    "mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto",
    "sun", "moon", "ceres", "eris", "haumea", "makemake"
]

# Directory to save the downloaded textures
save_dir = "public/textures"
os.makedirs(save_dir, exist_ok=True)

# Download function using wget
def download_texture(planet):
    url = base_url.format(planet=planet)
    file_name = f"{planet}.jpg"
    file_path = os.path.join(save_dir, file_name)
    
    # Use wget to download the file
    try:
        subprocess.run(["wget", "-O", file_path, url], check=True)
        print(f"Downloaded: {file_path}")
    except subprocess.CalledProcessError as e:
        print(f"Failed to download {planet}. Error: {e}")

# Download all textures
for planet in planets:
    download_texture(planet)

print("All textures downloaded!")