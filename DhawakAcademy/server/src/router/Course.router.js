import express from "express"
import { createCourse,deleteData,getAllCourse, getCourse } from "../controller/Course.controller.js"
import { upload } from "../middleware/upload.middleware.js"
import { authenticateAdmin, authenticateUser } from "../middleware/auth.middleware.js"
import { courseValidator } from "../validator/courseValidator.js"
import { validationResult } from "express-validator"


const router=express.Router()

router.post("/create",authenticateUser,authenticateAdmin,courseValidator,upload.single('image') ,createCourse)

router.get("/",getAllCourse)

router.delete("/:id",authenticateUser,authenticateAdmin,deleteData)

router.get("/details/:id",getCourse)

export default router 