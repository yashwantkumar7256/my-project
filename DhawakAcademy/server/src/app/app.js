import express from "express"
import courseRouter from "../router/Course.router.js";

const app =express();


app.use(express.json())

app.use("/api/course",courseRouter)

export default app