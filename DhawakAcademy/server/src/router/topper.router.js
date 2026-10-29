
import express from "express"
import { createTopper } from "../controller/topper.controller.js"

import { upload } from "../middleware/upload.middleware.js"

const router =express.Router()


router.post("/create",upload.single("image"),createTopper)


export default router