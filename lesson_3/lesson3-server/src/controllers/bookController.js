const Book = require("../models/books.js");

const getAllBook = async (req, res) => {
  try {
    const { title } = req.query;
    const books = await Book.find({
      title: { $reges: title || "", $options: "i" },
    });

    if (books.length === 0) {
      return res.status(404).json({
        message: "book not found",
        status: "fail",
        data: [],
      });
    }

    res.status(200).json({
      message: "books succesfuly found",
      data: books,
      status: "success",
    });
  } catch (error) {
    res.status(500).json({
      message: "Enternal server error",
      data: [],
      status: "fail",
    });
  }
};

const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({
        message: " book not faund",
        data: [],
        status: "fail",
      });
    }

    res.status(200).json({
      message: "Book successfully found",
      data: book,
      status: "success",
    });
  } catch (error) {
    res.status(500).json({
      message: "Fail in internal server",
      data: [],
      status: "fail",
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      return res.status(404).json({
        message: " book not faund",
        data: [],
        status: "fail",
      });
    }

    res.status(200).json({
      message: "Book successfully deleted",
      data: book,
      status: "success",
    });
  } catch (error) {
    res.status(500).json({
      message: "Fail in internal server",
      data: [],
      status: "fail",
    });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, image } = req.body;

    const newBook = new Book({
      title,
      author,
      image,
    });

    await newBook.save();
    if (!newBook) {
      res.status(404).json({
        message: "Book not found",
        data: [],
        status: "fail",
      });
    }

    return res.status(200).json({
      message: "books succesfuly created",
      data: newBook,
      status: "success",
    });
  } catch (error) {
    res.status(500).json({
      message: "Enternal server error",
      data: [],
      status: "fail",
    });
  }
};

module.exports = { getAllBook, getOne, deleteBook, createBook };
