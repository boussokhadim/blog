// structure des donnees

const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  name: String,
  content: String,
  publishedAt: Date,
});

module.exports = mongoose.model("Article", articleSchema);
