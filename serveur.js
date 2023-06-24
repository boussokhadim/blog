express = require("express");
swig = require("swig");
path = require("path");
mongoose = require("mongoose");
app = express();
app.use(express.logger());
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, "public")));
app.engin("html", swig.renderFile);
app.set("view engine", "html");

app.set("views", __dirname + "/views");
app.get("/ ", function (req, res) {
  data = { title: "mon super blog" };
  res.render("index", data);
});
app.listen(3000);
console.log("demarer le serveur http://localhost:3000");
