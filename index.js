const express = require("express");
const app = express();
const port = process.env.PORT;
// const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", {});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
