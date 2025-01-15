const User = require("../models/users.js");
const formatData = require("../utils/formatData.js");

const getAll = async (req, res) => {
  const { search, sort } = req.query;
  const [sortKey, sortOrder] = sort ? sort.split("-") : [];
  try {
    const users = await User.find({
      $or: [
        { name: { $regex: search || "", $options: "i" } },
        { username: { $regex: search || "", $options: "i" } },
      ],
    }).sort({ [sortKey]: sortOrder === "asc" ? 1 : -1 });

    if (users.length === 0) {
      return res.status(404).json({
        message: "Users not found",
        status: "fail",
        data: [],
      });
    }
    res.status(200).json({
      message: "All users successfully gound",
      status: "success",
      data: users.map(formatData),
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: "fail",
      data: [],
    });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      res.status(200).json({
        message: "User successfully found",
        status: "success",
        data: formatData(user),
      });
    } else {
      res.status(404).json({
        message: "User not found",
        status: "fail",
        data: [],
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: "fail",
      data: [],
    });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, username, age } = req.body;

    const newUser = new User({
      name,
      username,
      age,
    });

    await newUser.save();

    return res.status(200).json({
      message: "User successfully created",
      status: "success",
      data: formatData(newUser),
    });
  } catch (error) {
    res.status(500).json({
      message: "nasdkjasn",
      status: "fail",
      data: [],
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (user) {
      return res.status(200).json({
        message: "User successfully deleted",
        status: "success",
        data: [],
      });
    }
    res.status(404).json({
      message: "User not found",
      status: "fail",
      data: [],
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: "fail",
      data: [],
    });
  }
};

module.exports = { getAll, getById, createUser, deleteUser };
