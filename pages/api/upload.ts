import { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { image } = req.body; // Base64 image data
    const uploadResponse = await cloudinary.v2.uploader.upload(image, {
      folder: "Dynamic folders", // Cloudinary folder name
    });

    return res.status(200).json({ imageUrl: uploadResponse.secure_url });
  } catch (error) {
    return res.status(500).json({ message: "Image upload failed", error });
  }
}
