const mongoose = require("mongoose");
const MONGO_DB_URL = process.env.MONGO_DB_URL;

const connectToDb = () => {
  mongoose
    .connect(MONGO_DB_URL)
    .then(() => {
      console.log("connect to db sucessfully");
    })
    .catch(() => {
      console.log("fail");
    });
};

module.exports = connectToDb;
