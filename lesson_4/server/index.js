require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const cors = require("cors");
const app = express();
const connectToDb = require("../server/src/config/db.js");
const musicRouter = require("./src/routes/musicRouter.js");

app.use(express.json());
app.use(cors());
app.use("/musics", musicRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectToDb();

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
