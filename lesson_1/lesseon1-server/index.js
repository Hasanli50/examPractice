const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const connectToDb = require("./config/db.js");
const cors = require("cors");
const productsRouter = require("./routes/shopRouter.js");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/products", productsRouter);

connectToDb();

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
