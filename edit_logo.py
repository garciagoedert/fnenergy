from PIL import Image

def edit_logo():
    input_path = "/Users/goedert/.gemini/antigravity/brain/a9e920a4-0dbd-4fde-ab54-b34f603dbcd0/fn_energy_logo_eco_transparent_v2_1764451472337.png"
    output_path = "assets/img/logo.png"

    try:
        img = Image.open(input_path).convert("RGBA")
        
        # 1. Create a white background image of the same size
        white_bg = Image.new("RGBA", img.size, "WHITE")
        
        # 2. Composite the transparent logo onto the white background
        # This handles the "white background" requirement
        combined = Image.alpha_composite(white_bg, img)
        combined = combined.convert("RGB") # Remove alpha channel for final output if we want pure jpg/png without transparency, but user asked for white background so RGB is fine.

        # 3. Crop the bottom part to remove "ENERGY"
        # Assuming "ENERGY" is at the bottom. Let's crop the bottom 20% to be safe, 
        # but we need to be careful not to cut the "FN".
        # Let's try to find the bounding box of the non-white content first to see where the logo actually is.
        # Since we just added a white background, everything is "content" if we look at RGB. 
        # So let's look at the original alpha channel to find the content bounds.
        
        bbox = img.getbbox()
        if bbox:
            # Crop to content first
            content = combined.crop(bbox)
            
            # Now crop the bottom 25% of the CONTENT height
            width, height = content.size
            new_height = int(height * 0.75) 
            final_img = content.crop((0, 0, width, new_height))
            
            print(f"Original content size: {width}x{height}")
            print(f"New size after cropping text: {width}x{new_height}")
            
            final_img.save(output_path)
            print(f"Successfully saved edited logo to {output_path}")
        else:
            print("Error: Could not determine logo bounds.")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    edit_logo()
