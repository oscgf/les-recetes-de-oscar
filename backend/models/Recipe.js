const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  ingredients: [String],
  instructions: [String],
  image: String,
  tags: [String],
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Recipe", recipeSchema);