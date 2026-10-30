import { body, validationResult } from "express-validator";

export const contactValidation = [
  body("name")
    .exists()
    .withMessage("name is required")
    .isString()
    .withMessage("name must be String")
    .trim()
    .isLength({ min: 3, max: 15 })
    .withMessage("min 3 max 15 character is requird"),
  body("age")
    .exists()
    .withMessage("age must be required")
    .isString()
    .withMessage("age must be string")
    .isLength({ min: 2, max: 2 })
    .withMessage("age min max 2 digit"),
  body("mob")
    .exists()
    .withMessage("mob number must be required")
    .isString()
    .withMessage("mob must be string ")
    .trim()
    .isLength({ min: 10, max: 10 })
    .withMessage("min max 10 digit is required"),
  body("course")
    .exists()
    .withMessage("course must required")
    .isString("course must string")
    .trim()
    .isLength({ min: 2, max: 20 })
    .withMessage("min 2 max 20 character is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        Message: "fill every propery ",
        error: errors.array(),
      });
    }
    next();
  },
];
