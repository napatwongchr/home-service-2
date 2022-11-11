import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises";

const cloudinaryUpload = async (file) => {
    const fileUrl = []
    const result = await cloudinary.uploader.upload(file.path, {
        folder: "home-service/file-uploading",
        type: "private",
    });


    fileUrl.push({
        url: result.secure_url,
        publicId: result.public_id,
        bytes : result.bytes
    })
    await fs.unlink(file.path);
    
    return fileUrl
}

const cloudinaryDestroy = async (public_id) =>{
    await cloudinary.uploader.destroy(public_id)
}

export { cloudinaryUpload, cloudinaryDestroy };