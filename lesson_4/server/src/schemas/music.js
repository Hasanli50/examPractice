const mongoose = require("mongoose");
const { Schema } = mongoose;

const musicSchema = new Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  image: { type: String, require: true },
  price: { type: Number, require: true },
  isFavorite: { type: Boolean, require: false, default: false },
  isBasket: { type: Boolean, require: false, default: false },
});

module.exports = musicSchema;
