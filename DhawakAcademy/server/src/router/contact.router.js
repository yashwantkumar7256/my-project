import express from "express"

import { createContact, getAllContact } from "../controller/contact.controller.js"
import { contactValidation } from "../validator/contact.validator.js"

const router = express.Router()

router.post("/create",contactValidation,createContact)

router.get("/",getAllContact)

export default router 