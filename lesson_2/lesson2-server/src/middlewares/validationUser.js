const { validationResult, body } = require("express-validator");

const ValidatorUser = [
    body("name", "Name is required").notEmpty(),
    body("username", "Username is required").notEmpty(),
    body("age", "Age is required").notEmpty(),
  
    (req, res, next) => {
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      res.status(200).json({ success: "Successful Sign Up!" });
      next();
    },
];

module.exports = ValidatorUser;
