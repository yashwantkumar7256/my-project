import express from "express"
import courseRouter from "../router/Course.router.js";
import topperRouter from "../router/topper.router.js"
import contactRouter from "../router/contact.router.js"

const app =express();


app.use(express.json())

app.use("/api/course",courseRouter)
app.use("/api/topper",topperRouter)
app.use("/api/contact",contactRouter)

export default app