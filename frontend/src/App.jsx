import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RecipesPage from './pages/RecipesPage';
import RecipePage from './pages/RecipePage';

function App() {
  const useMockData = false; // For testing with local data

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipesPage useMockData={useMockData} />} />
        <Route path="/recipes/:id" element={<RecipePage useMockData={useMockData} />} />
      </Routes>
    </Router>
  );
}

export default App;
