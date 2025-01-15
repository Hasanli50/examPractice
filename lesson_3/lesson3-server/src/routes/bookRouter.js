const {
  getAllBook,
  getOne,
  deleteBook,
  createBook,
} = require("../controllers/bookController.js");
const express = require("express");
const router = express.Router();

router.get("/", getAllBook);
router.get("/:id", getOne);
router.delete("/:id", deleteBook);
router.post("/", createBook);

module.exports = router;
