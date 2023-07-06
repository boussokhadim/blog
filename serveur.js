const express = require("express");
const swig = require("swig");
const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");
// require de notre modele
const Article = require("./models/article.modele.js");

app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.engine("html", swig.renderFile);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "views"));
mongoose
  .connect(
    "mongodb+srv://termuxbanner:banner123@cluster0.8hcgyas.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => console.log("connexion ok"));
// creation d'un article
var article = new Article({
  name: "article N1",
  content: "content",
  publishedAt: Date.now(),
});
// sauvegarder l'article
article
  .save()

  .then(() => console.log("sauvegarde reussi"))
  .catch(() => console.log("sauvegarde echouer"));

app.get("/", function (req, res) {
  data = { title: "mon super blog" };
  res.render("index", data);
});
app.get("/create", function (req, res) {
  data = { title: "Ajouter un article" };
  res.render("create", data);
});

app.listen(3000);
