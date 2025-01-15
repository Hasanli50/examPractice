const express = require("express");
const {
  getAll,
  getById,
  createProduct,
  deleteProduct,
} = require("../controllers/shopControllers.js");
const createValidator = require("../middlewares/productValidation.js")

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", createValidator,createProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
