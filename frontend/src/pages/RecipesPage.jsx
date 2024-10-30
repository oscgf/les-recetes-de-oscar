import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import recipesData from '../../../recipesData'; // Import the mock data

const baseUrl = "/api/recipes"

// const createPath = (title) => {
//   const recipePath = title.toLowerCase().replaceAll(" ","-");
//   return `/recipes/${recipePath}`;
// }

const RecipesPage = ({ useMockData = false }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      if (useMockData) {
        // Use local mock data
        setRecipes(recipesData);
      } else {
        // Fetch data from the backend API
        try {
          const response = await axios.get(baseUrl);
          setRecipes(response.data);
        } catch (error) {
          console.error("Error fetching recipes:", error);
        }
      }
    };

    fetchRecipes();
  }, [useMockData]);

  return (
    <div> 
      <h1>All Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
              <Link to={recipe._id}>
                <h2>{recipe.title}</h2>
                <p>{recipe.description}</p>
              </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

RecipesPage.propTypes = {
  useMockData: PropTypes.bool,
};

export default RecipesPage;