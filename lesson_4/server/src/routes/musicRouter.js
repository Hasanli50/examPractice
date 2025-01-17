const {
  getAll,
  getById,
  createMusic,
  deleteMusic,
  favoriteToggle,
} = require("../controllers/musicController.js");
const express = require("express");
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", createMusic);
router.delete("/:id", deleteMusic);
router.patch("/:id", favoriteToggle);

module.exports = router;
