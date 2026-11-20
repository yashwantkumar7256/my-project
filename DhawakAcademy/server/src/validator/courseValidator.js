import { body, validationResult } from "express-validator";
export const courseValidator = [
  body("courseName").exists().withMessage("courseName is required"),
  body("price").exists().withMessage("price is required"),
  body("duration").exists().withMessage("duration is required"),
  body("validity").exists().withMessage("validity is required"),
  body("location").exists().withMessage("location is required"),
  body("timing").exists().withMessage("timig is required"),
  body("tranner").exists().withMessage("tranner is required"),

  (req, res, next) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({
        message: "fill every field",
        error,
      });
    }
    next();
  },
];
