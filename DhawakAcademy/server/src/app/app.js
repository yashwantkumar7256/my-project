import express from "express"
import cookieParser from "cookie-parser";
import courseRouter from "../router/Course.router.js";
import topperRouter from "../router/topper.router.js"
import contactRouter from "../router/contact.router.js"
import authRouter from "../router/user.router.js"

import cors from "cors"
const app =express();

app.use(cors({
  origin: [
    "http://localhost:5173",
      "https://my-project-y6v6.vercel.app",
    "https://my-project-jotb2087a-yashwantkumar7256s-projects.vercel.app"
  ],
  credentials: true
}));
app.use(express.json())
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