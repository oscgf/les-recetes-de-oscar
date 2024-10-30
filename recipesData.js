const recipes = [
  { 
    title: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish",
    ingredients: ["spaghetti", "eggs", "pecorino cheese", "guanciale"],
    instructions: [
      "Bring a large pot of salted water to a boil",
      "Cook spaghetti until al dente",
      "Fry guanciale in a pan until crispy",
      "Whisk eggs and pecorino cheese in a bowl",
      "Drain spaghetti and add to the pan with guanciale",
      "Add egg mixture to the pan and stir until creamy",
      "Serve hot with a sprinkle of pecorino cheese",
    ],
    image: "https://source.unsplash.com/1600x900/?spaghetti",
    tags: ["pasta", "italian", "comfort food"],
  },
  {
    title: "Margherita Pizza",
    description: "A simple and classic pizza topped with fresh ingredients",
    ingredients: ["pizza dough", "tomato sauce", "mozzarella cheese", "fresh basil", "olive oil"],
    instructions: [
      "Preheat oven to 475°F (245°C)",
      "Roll out pizza dough on a floured surface",
      "Spread tomato sauce over the dough",
      "Add slices of mozzarella cheese on top",
      "Bake in oven for 10-12 minutes until crust is golden and cheese is melted",
      "Garnish with fresh basil leaves and drizzle with olive oil",
    ],
    image: "https://source.unsplash.com/1600x900/?pizza",
    tags: ["pizza", "italian", "vegetarian"],
  },
  {
    title: "Chicken Tikka Masala",
    description: "A popular Indian curry dish with marinated chicken in a creamy sauce",
    ingredients: ["chicken breast", "yogurt", "garam masala", "tomato puree", "cream", "spices"],
    instructions: [
      "Marinate chicken in yogurt and spices for at least 1 hour",
      "Cook chicken in a pan until golden brown",
      "In another pan, cook spices and tomato puree until aromatic",
      "Add cream and simmer until sauce thickens",
      "Add cooked chicken to the sauce and mix well",
      "Serve hot with rice or naan",
    ],
    image: "https://source.unsplash.com/1600x900/?chicken%20curry",
    tags: ["indian", "spicy", "comfort food"],
  },
  {
    title: "Caesar Salad",
    description: "A crisp and tangy salad with a creamy dressing",
    ingredients: ["romaine lettuce", "croutons", "parmesan cheese", "caesar dressing", "chicken breast (optional)"],
    instructions: [
      "Chop romaine lettuce and place in a large bowl",
      "Add croutons and grated parmesan cheese",
      "Drizzle Caesar dressing and toss well",
      "Top with sliced grilled chicken if desired",
      "Serve immediately",
    ],
    image: "https://source.unsplash.com/1600x900/?caesar%20salad",
    tags: ["salad", "healthy", "quick meal"],
  },
  {
    title: "Beef Tacos",
    description: "Delicious and spicy beef tacos topped with fresh ingredients.",
    ingredients: ["ground beef", "taco shells", "lettuce", "tomato", "cheddar cheese", "sour cream", "taco seasoning"],
    instructions: [
        "Cook ground beef in a skillet over medium heat until browned.",
        "Add taco seasoning and a little water; simmer for a few minutes.",
        "Warm taco shells according to package instructions.",
        "Fill each shell with the beef mixture.",
        "Top with shredded lettuce, diced tomatoes, cheddar cheese, and a dollop of sour cream.",
        "Serve immediately with lime wedges."
    ],
    image: "https://source.unsplash.com/1600x900/?tacos",
    tags: ["mexican", "comfort food", "quick meal"],
},
  {
    title: "Vegetable Stir-Fry",
    description: "A quick and healthy vegetable stir-fry loaded with flavor.",
    ingredients: ["mixed vegetables (bell peppers, broccoli, carrots)", "soy sauce", "garlic", "ginger", "olive oil", "sesame seeds"],
    instructions: [
        "Heat olive oil in a pan over medium-high heat.",
        "Add minced garlic and ginger, sauté until fragrant.",
        "Add mixed vegetables and stir-fry until tender-crisp.",
        "Pour soy sauce over the vegetables and toss to combine.",
        "Garnish with sesame seeds and serve hot over rice or noodles."
    ],
    image: "https://source.unsplash.com/1600x900/?stir-fry",
    tags: ["vegetarian", "healthy", "quick meal"],
  },
  {
    title: "Chocolate Chip Cookies",
    description: "Classic homemade chocolate chip cookies that are soft and chewy.",
    ingredients: ["butter", "sugar", "brown sugar", "eggs", "vanilla extract", "flour", "baking soda", "salt", "chocolate chips"],
    instructions: [
        "Preheat the oven to 350°F (175°C).",
        "In a bowl, cream together butter, sugar, and brown sugar.",
        "Add eggs and vanilla, and mix until combined.",
        "In another bowl, whisk together flour, baking soda, and salt.",
        "Gradually add the dry ingredients to the wet mixture, then fold in chocolate chips.",
        "Drop spoonfuls of dough onto a baking sheet.",
        "Bake for 10-12 minutes or until edges are golden brown.",
        "Cool on a wire rack before serving."
    ],
    image: "https://source.unsplash.com/1600x900/?cookies",
    tags: ["dessert", "baking", "comfort food"],
  }
];

export default recipes;