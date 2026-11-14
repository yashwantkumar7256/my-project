import express from "express"
import cookieParser from "cookie-parser";
import courseRouter from "../router/Course.router.js";
import topperRouter from "../router/topper.router.js"
import contactRouter from "../router/contact.router.js"
import authRouter from "../router/user.router.js"

import cors from "cors"
const app =express();

const allowedOrigins = new Set([
  "http://localhost:5173",
  "https://my-project-nu-eosin-32.vercel.app",
  "https://my-project-jnrek2ky1-yashwantkumar7256s-projects.vercel.app",
  ...(process.env.CORS_ORIGINS || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
]);

app.use(cors({
  origin: (origin, callback) => {
    callback(null, !origin || allowedOrigins.has(origin));
  },
  credentials: true
}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/api/course",courseRouter)
app.use("/api/topper",topperRouter)
app.use("/api/contact",contactRouter)
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is working"
  });
});


app.use("/api/auth",authRouter)
export default app