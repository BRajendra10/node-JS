import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

/*
    ------------------------------------------
    🌩️ What is Cloudinary?
    ------------------------------------------
    Cloudinary is a cloud-based service used for:
      ✔ Uploading images/videos
      ✔ Storing them safely in the cloud
      ✔ Optimizing files automatically
      ✔ Delivering them via fast CDN worldwide
      ✔ Transforming media (resize, crop, compress)

    Why developers use Cloudinary:
      ✔ No need to store big files on your server
      ✔ Saves server disk space
      ✔ Super fast image/video loading for users
      ✔ Easy API for upload/delete operations
      ✔ Used in real production apps (Netflix, Nike, Spotify)

    Here, we configure Cloudinary using our private keys
    stored in environment variables (.env)
*/

// Configure Cloudinary using environment variables
// Benefit → Keeps secrets secure and allows different configs for dev/prod
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// ----------------------------------------------
// Upload File to Cloudinary
// ----------------------------------------------
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        // If no file path found, stop immediately
        // Benefit → Prevents errors when file is missing

        // Upload file to Cloudinary
        // resource_type: "auto" → automatically detects if file is image/video
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });

        // Remove file from local system after uploading
        // Benefit → Saves storage space on server
        fs.unlinkSync(localFilePath);

        return response;
        // Return Cloudinary upload details (URL, public_id, etc.)
    } catch (error) {
        console.log(`Cloudinary upload error: `, error);

        // If something goes wrong, still delete temp file
        // Benefit → Avoid leftover temp files clogging storage
        fs.unlinkSync(localFilePath);

        return null;  
        // Return null so caller knows upload failed
    }
};


// ----------------------------------------------
// Delete File from Cloudinary
// ----------------------------------------------
const deleteOnCloudinary = async (id) => {
    try {
        // id = Cloudinary "public_id" of the file
        // Example: "movies/u6h7dfh8gdh"

        const result = await cloudinary.uploader.destroy(id);
        // Deletes the file from Cloudinary storage

        return result;
        // Return Cloudinary delete result (success/failure)
    } catch (error) {
        console.error("Cloudinary Delete Error:", error);
        // Only log the error; no throw so app doesn't crash
    }
};


export { uploadOnCloudinary, deleteOnCloudinary };
// Export functions for use in controllers/services for clean modular code