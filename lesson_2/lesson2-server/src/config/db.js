require("dotenv").config();
const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_DB_CONNECT_STRING = process.env.MONGO_DB_CONNECT_STRING;
const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      MONGO_DB_CONNECT_STRING.replace("<db_username>", MONGO_USERNAME).replace(
        "<db_password>",
        MONGO_PASSWORD
      )
    )
    .then(() => {
      console.log("Connected to the database successfully");
    })
    .catch((err) => {
      console.error("DB ERROR:", err);
    });
};

module.exports = connectToDb;
