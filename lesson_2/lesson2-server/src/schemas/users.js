const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    age: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = userSchema;
