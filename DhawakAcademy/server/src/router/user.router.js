import express from "express"
import { getMe, login, refresh, registerUser } from "../controller/user.controller.js"
import { registerValidator } from "../validator/register.validator.js"
import { loginValidation } from "../validator/loginValdator.js"
import { authenticateAdmin, authenticateUser } from "../middleware/auth.middleware.js"

const router= express.Router()

router.post("/register",registerValidator,registerUser)
router.get("/me",authenticateUser,authenticateAdmin,getMe)
router.get("/refresh",refresh)
router.post("/login",loginValidation,login)

export default router