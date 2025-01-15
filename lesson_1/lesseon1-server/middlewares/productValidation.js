const { validationResult, body } = require("express-validator");

const createValidator = [
  body("title", "title is required").notEmpty(),
  body("price", "price is required").notEmpty(),
  body("description", "description is required").notEmpty(),
  body("category", "category is required").notEmpty(),
  body("rating", "rating is required").optional().notEmpty(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        data: null,
        message: "Validation failed",
        errors: errors.array(),
        status: "fail",
      });
    }
    next()
  },
];

module.exports = createValidator;
