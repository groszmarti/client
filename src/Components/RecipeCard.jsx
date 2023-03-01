import "../index.css";
import { Link } from 'react-router-dom'

const RecipeCard = ({ recipe, onDelete }) => {
  
  return (
      <div className="recipe-details">
        <h4>{recipe.name}</h4><br></br>
        <ul><strong>Ingredients:</strong><br></br>
        {recipe.ingredients.map((ingredient, index) =>
        /^\d/.test(ingredient.quantity)
        ? <li key={index}>{ingredient.quantity} {ingredient.name}</li>
        : <li key={index}>{ingredient.name} ({ingredient.quantity})</li>        
        )}
        </ul>
        <p><strong>Instructions:</strong><br></br>
        {recipe.instructions}</p>
        <Link to={`/update/${recipe._id}`}>
        <button>Update</button>
        </Link>
        <button onClick={() => onDelete(recipe._id)}>Delete</button>
      </div>
  )
};

export default RecipeCard;
