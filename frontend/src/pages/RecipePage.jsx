import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import recipesData from '../../../recipesData'; // Import the mock data

const baseUrl = "/api/recipes"

const RecipePage = ({ useMockData = false }) => {

  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      if (useMockData) {
        // Find the recipe in the mock data
        const mockRecipe = recipesData.find((recipe) => recipe._id === id);
        setRecipe(mockRecipe);
      } else {
        // Fetch data from the backend API
        try {
          const response = await axios.get(`${baseUrl}/${id}`);
          setRecipe(response.data);
        } catch (error) {
          console.error("Error fetching recipe:", error);
        }
      }
    };

    fetchRecipe();
  }, [id, useMockData]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }} />
      <p>{recipe.description}</p>

      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h3>Instructions:</h3>
      <ol>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <h4>Tags: {recipe.tags.join(", ")}</h4>
    </div>
  );
};

RecipePage.propTypes = {
  useMockData: PropTypes.bool,
};

export default RecipePage;
