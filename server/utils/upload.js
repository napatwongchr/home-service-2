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
        bytes: result.bytes
    })
    await fs.unlink(file.path);
    
    return fileUrl
}

const cloudinaryDelete = async (file) => {
    const result = await cloudinary.uploader.destroy(file, {
        resource_type: "image",
        type: "private"
    })

    return result
}

export { cloudinaryUpload, cloudinaryDelete };
