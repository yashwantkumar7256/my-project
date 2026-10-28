import express from "express"
import { createCourse,deleteData,getAllCourse } from "../controller/Course.controller.js"
import { upload } from "../middleware/upload.middleware.js"


const router=express.Router()

router.post("/create",upload.single('image') ,createCourse)

router.get("/",getAllCourse)

router.delete("/:id",deleteData)

export default router