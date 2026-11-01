import { body, validationResult } from "express-validator";

export const registerValidator = [
  body("email")
    .exists()
    .withMessage("email is required")
    .bail()
    .isEmail()
    .withMessage("enter valid email")
    .bail(),
  body("name")
    .exists()
    .withMessage("name is required").bail()
    .isString()
    .withMessage("name must String").bail()
    .isLength({ min: 3, max: 15 })
    .withMessage("min 3 max 15 charater is reuired"),
  body("password")
    .exists()
    .withMessage("password is required")
    .isString().bail()
    .withMessage("password must be string")
    .isLength({ min: 6, max: 15 }).bail()
    .withMessage("min 6 max 15 digit is required"),
  body("mob")
    .exists()
    .withMessage("mob number is required").bail()
    .isString()
    .withMessage("mob number must be String").bail()
    .isLength({ min: 10, max: 10 })
    .withMessage("mob min-max length is 10"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        Message: "fill every field propery",
        errors: errors,
      });
    }
    next()
  },
];
