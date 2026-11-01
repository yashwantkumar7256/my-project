import { body, validationResult } from "express-validator";

export const loginValidation = [
  body("email")
    .exists()
    .withMessage("email is required")
    .bail()
    .isEmail()
    .withMessage("enter must be valid"),
  body("password")
    .exists()
    .withMessage("password must required")
    .bail()
    .isString()
    .withMessage("password must string")
    .bail()
    .isLength({ min: 6, max: 15 })
    .withMessage("email and password invalid"),

    (req,res,next)=>{
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                Message:"enter field properly",
                errors:errors
            })
        }
        next()
    }
];
