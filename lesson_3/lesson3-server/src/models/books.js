const mongoose = require("mongoose");
const bookSchema = require("../schemas/books.js");

const Book = mongoose.model("Book", bookSchema);

module.exports = bookSchema;
