const express = require("express");
const app = express();
const PORT = process.env.PORT;
const connectToDb = require("./src/config/db.js");
const routerBook = require("./src/routes/bookRouter.js");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use("/books", routerBook);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectToDb();
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
