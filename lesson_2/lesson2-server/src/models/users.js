const mongoose = require("mongoose");
const userSchema = require("../schemas/users.js");

const User = mongoose.model("User", userSchema);

module.exports = User;
