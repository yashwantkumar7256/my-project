import express from "express"

import { createContact, getAllContact } from "../controller/contact.controller.js"
import { contactValidation } from "../validator/contact.validator.js"
import { authenticateAdmin, authenticateUser } from "../middleware/auth.middleware.js"

const router = express.Router()

router.post("/create",contactValidation,createContact)

router.get("/",authenticateUser,authenticateAdmin,getAllContact)

export default router 