import ImageKit, { toFile } from "@imagekit/nodejs";
import config from "../config/config.js";

const client = new ImageKit({
  privateKey: config.IMAGEKIT_PRIVATE_KEY,
});

export const uploadFile = async ({ buffer, fileName }) => {
  try {
    console.log("Buffer exists:", !!buffer);
    console.log("File name:", fileName);

    const file = await toFile(buffer, fileName);

    const response = await client.files.upload({
      file: file,
      fileName: fileName,
      folder: "/DhawakAcademy",
    });

    return response;
  } catch (err) {
    console.error("ImageKit Upload error:", err.message);
    throw err;
  }
};