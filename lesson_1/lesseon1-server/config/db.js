const mongoose = require("mongoose");
const MONGO_DB_USERNAME = process.env.MONGO_DB_USERNAME;
const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD;
const MONGO_DB_CONNECT_STRING = process.env.MONGO_DB_CONNECT_STRING;

const connectToDb = () => {
  mongoose.connect(
    MONGO_DB_CONNECT_STRING.replace("<db_username>", MONGO_DB_USERNAME).replace(
      "<db_password>",
      MONGO_DB_PASSWORD
    )
  ).then(() => {
    console.log("Connected to the database successfully");
  })
  .catch((err) => {
    console.error("DB ERROR:", err);
  });;
};

module.exports = connectToDb;
