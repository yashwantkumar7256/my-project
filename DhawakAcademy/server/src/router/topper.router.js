
import express from "express"
import { createTopper, deleteTopper, getAllTopper } from "../controller/topper.controller.js"

import { upload } from "../middleware/upload.middleware.js"

const router =express.Router()


router.post("/create",upload.single("image"),createTopper)

router.get("/",getAllTopper)

router.delete("/delete/:id",deleteTopper)


export default router