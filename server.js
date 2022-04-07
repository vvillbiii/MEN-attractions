const express = require("express");
const app = express();
const dbConnection = require("./config/db.connections");
const methodOverride = require("method-override");
const PORT = 4000;

app.set("view engine", "ejs");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("homepage");
});

app.get("/*", (req, res) => {
  res.send("page does not exist");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
