const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
const connectToDb = require("./src/config/db.js");
const userRouter = require("./src/routes/userRouter.js");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectToDb();

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
