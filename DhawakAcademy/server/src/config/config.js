import dotenv from "dotenv"
import ImageKit from "imagekit";
 dotenv.config()

 const config={

    MONGO_URI:process.env.MONGO_URI,
    IMAGEKIT_PRIVATE_KEY:process.env.IMAGEKIT_PRIVATE_KEY
 }

 export default config;