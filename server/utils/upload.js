import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises";

const cloudinaryUpload = async (file) => {
    const fileUrl = []
    const result = await cloudinary.uploader.upload(file.path, {
        folder: "home-service/file-uploading",
        type: "private",
    });
    console.log(result);
    fileUrl.push({
        url: result.secure_url,
        publicId: result.public_id,
        size: result.bytes
    })
    await fs.unlink(file.path);

    return fileUrl
}

export { cloudinaryUpload };