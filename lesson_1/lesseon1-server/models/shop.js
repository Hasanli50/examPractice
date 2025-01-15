const mongoose = require("mongoose");
const ShopScheme = require("../schemas/shop.js");

const Shop = mongoose.model("Shop", ShopScheme);

module.exports = Shop;
