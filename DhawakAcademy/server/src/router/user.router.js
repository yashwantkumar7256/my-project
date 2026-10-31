import express from "express"
import { getMe, login, refresh, registerUser } from "../controller/user.controller.js"

const router= express.Router()

router.post("/register",registerUser)
router.get("/me",getMe)
router.get("/refresh",refresh)
router.post("/login",login)

export default router