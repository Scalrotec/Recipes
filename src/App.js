import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [recipes, setRecipes] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();

      // Store recipes in state
      setRecipes(data.recipes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <div className="container">
        <Navbar />

        <div className="hero">
          <h1>ScalroFood Recipes</h1>
          <h3>Welcome to ScalroFood!</h3>
        </div>

        <FoodRecipes recipes={recipes} />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <h3>Explore More</h3>
    </nav>
  );
}

function FoodRecipes({ recipes }) {
  return (
    <div className="recipe-card-container">
      {recipes.map((recipe) => (
        <div className="recipe-card" key={recipe.id}>
          <h3>{recipe.name}</h3>
          <img src={recipe.image} alt={recipe.name} className="recipe-image" />
          <h4>Ingredients</h4>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h4>Instructions</h4>
          <ul>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
          <div className="recipe-details">
            <p>
              <strong>Preparation Time:</strong> {recipe.prepTimeMinutes}{" "}
              minutes
            </p>
            <p>
              <strong>Cooking Time:</strong> {recipe.cookTimeMinutes} minutes
            </p>
            <p>
              <strong>Servings:</strong> {recipe.servings}
            </p>
            <p>
              <strong>Difficulty:</strong> {recipe.difficulty}
            </p>
            <p>
              <strong>Cuisine:</strong> {recipe.cuisine}
            </p>
            <p>
              <strong>Calories Per Serving:</strong> {recipe.caloriesPerServing}
            </p>
            <p>
              <strong>Rating:</strong> {recipe.rating}/5
            </p>
            <p>
              <strong>Review Count:</strong> {recipe.reviewCount}
            </p>
            <p>
              <strong>Meal Type:</strong> {recipe.mealType}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
