require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

const requestLogger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(requestLogger)

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const Recipe = require("./models/Recipe");

/*
  ROUTES
*/

// Home route
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})


// Get all recipes
app.get("/api/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Error fetching recipes." });
  }
});

// Get a single recipe by ID
app.get("/api/recipes/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found." });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: "Error fetching recipe." });
  }
});

// Create a new recipe
app.post("/api/recipes", async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({ error: "Error creating recipe." });
  }
});

// Update a recipe by ID
app.put("/api/recipes/:id", async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedRecipe) {
      return res.status(404).json({ error: "Recipe not found." });
    }
    res.json(updatedRecipe);
  } catch (error) {
    res.status(400).json({ error: "Error updating recipe." });
  }
});

// Delete a recipe by ID
app.delete("/api/recipes/:id", async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) {
      return res.status(404).json({ error: "Recipe not found." });
    }
    res.json({ message: "Recipe deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Error deleting recipe." });
  }
});

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
