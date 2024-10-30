import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Recipe Blog</h1>
      <p>Discover delicious recipes and culinary inspiration!</p>
      <Link to="/recipes">
        <button>View Recipes</button>
      </Link>
    </div>
  );
};

export default HomePage;
