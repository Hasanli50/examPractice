// const express = require("express");
const Shop = require("../models/shop.js");
const formatShop = require("../utils/formatShop.js")

// getAll
const getAll = async (req, res) => {
  try {
    const { search, sort } = req.query;
    const [sortKey, sortOrder] = sort ? sort.split("-") : [];
    const shops = await Shop.find({
      $or: [
        { title: { $regex: search || "", $options: "i" } },
        { category: { $regex: search || "", $options: "i" } },
      ],
    }).sort({ [sortKey]: sortOrder === "asc" ? 1 : -1 });

    if (shops.length > 0) {
      res.status(200).json({
        data: shops,
      });
    } else {
      res.status(404).json({
        data: [],
        message: "Products not found ",
        status: "fail",
      });
    }
  } catch (error) {
    res.status(500).json({
      data: [],
      error: error.message,
      status: "fail",
    });
  }
};

//getBYId
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const shop = await Shop.findById(id);

    if (shop) {
      res.status(200).json({
        message: "Product successfully found",
        status: "success",
        data: shop,
      });
    } else {
      res.status(404).json({
        data: [],
        message: "Product not found ",
        status: "fail",
      });
    }
  } catch (error) {
    res.status(500).json({
      data: [],
      error: error.message,
      status: "fail",
    });
  }
};

//create
const createProduct = async (req, res) => {
  try {
    const { title, price, description, category, rating } = req.body;

    const newProduct = new Shop({
      title,
      price,
      description,
      category,
      rating,
    });

    await newProduct.save();

      res.status(200).json({
        message: "Product successfully created",
        status: "success",
        data: formatShop(newProduct),
      });
      // res.status(404).json({
      //   data: [],
      //   message: "Fail to create product ",
      //   status: "fail",
      // });
    
  } catch (error) {
    res.status(500).json({
      data: [],
      error: error.message,
      status: "fail",
    });
  }
};

//delete
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const shop = await Shop.findByIdAndDelete(id);

    if (shop) {
      res.status(200).json({
        message: "Product successfully deleted",
        status: "success",
        data: shop,
      });
    } else {
      res.status(404).json({
        data: [],
        message: "Product not found ",
        status: "fail",
      });
    }
  } catch (error) {
    res.status(500).json({
      data: [],
      error: error.message,
      status: "fail",
    });
  }
};

module.exports = { getAll, getById, createProduct, deleteProduct };
