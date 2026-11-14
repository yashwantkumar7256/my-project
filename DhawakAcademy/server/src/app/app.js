import express from "express"
import cookieParser from "cookie-parser";
import courseRouter from "../router/Course.router.js";
import topperRouter from "../router/topper.router.js"
import contactRouter from "../router/contact.router.js"
import authRouter from "../router/user.router.js"

import cors from "cors"
const app =express();

app.use(cors({
    
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json())
app.use(cookieParser())

app.use("/api/course",courseRouter)
app.use("/api/topper",topperRouter)
app.use("/api/contact",contactRouter)


app.use("/api/auth",authRouter)
export default app