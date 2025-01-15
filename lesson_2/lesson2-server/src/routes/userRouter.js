const {
  getAll,
  getById,
  createUser,
  deleteUser,
} = require("../controllers/userControllers.js");
const express = require("express");
const ValidatorUser = require("../middlewares/validationUser.js");
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", ValidatorUser, createUser);
router.delete("/:id", deleteUser);

module.exports = router;
