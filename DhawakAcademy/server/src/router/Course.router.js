import express from "express"
import { createCourse,deleteData,getAllCourse } from "../controller/Course.controller.js"
import { upload } from "../middleware/upload.middleware.js"
import { authenticateAdmin, authenticateUser } from "../middleware/auth.middleware.js"


const router=express.Router()

router.post("/create",authenticateUser,authenticateAdmin,upload.single('image') ,createCourse)

router.get("/",getAllCourse)

router.delete("/:id",authenticateUser,authenticateAdmin,deleteData)

export default router 