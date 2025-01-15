const mongoose = require("mongoose");
const { Schema } = mongoose;

const ShopScheme = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    rating: {
      default: 0,
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = ShopScheme;
