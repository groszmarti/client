import { useState, useEffect } from 'react';
import Loading from '../Components/Loading';


const MealPlan = () => {
  const [mondayRecipe, setMondayRecipe] = useState(null);
  const [tuesdayRecipe, setTuesdayRecipe] = useState(null);
  const [wednesdayRecipe, setWednesdayRecipe] = useState(null);
  const [thursdayRecipe, setThursdayRecipe] = useState(null);
  const [fridayRecipe, setFridayRecipe] = useState(null);
  const [saturdayRecipe, setSaturdayRecipe] = useState(null);
  const [sundayRecipe, setSundayRecipe] = useState(null);

  const pick = (from) => from[Math.floor(Math.random() * (from.length - 0))];

  const getRandomRecipeMonday = async () => {
    const res = await fetch('/api/recipes');
    const data = await res.json();
    setMondayRecipe(pick(data));
  }


  const getRandomRecipeTuesday = async () => {
    const res = await fetch('/api/recipes');
    const data = await res.json();
    setTuesdayRecipe(pick(data));
  }

  const getRandomRecipeWednesday = async () => {
    const res = await fetch('/api/recipes');
    const data = await res.json();
    setWednesdayRecipe(pick(data));
  }

  const getRandomRecipeThursday = async () => {
    const res = await fetch('/api/recipes');
    const data = await res.json();
    setThursdayRecipe(pick(data));
  }

  const getRandomRecipeFriday = async () => {
    const res = await fetch('/api/recipes');
    const data = await res.json();
    setFridayRecipe(pick(data));
  }

  const getRandomRecipeSaturday = async () => {
    const res = await fetch('/api/recipes');
    const data = await res.json();
    setSaturdayRecipe(pick(data));
  }

  const getRandomRecipeSunday = async () => {
    const res = await fetch('/api/recipes');
    const data = await res.json();
    setSundayRecipe(pick(data));
  }

  useEffect(()=> {
    getRandomRecipeMonday();
    console.log(mondayRecipe);
    getRandomRecipeTuesday();
    getRandomRecipeWednesday();
    getRandomRecipeThursday();
    getRandomRecipeFriday();
    getRandomRecipeSaturday();
    getRandomRecipeSunday();
  }, []);

  if (!mondayRecipe || !tuesdayRecipe || !wednesdayRecipe || thursdayRecipe || fridayRecipe || saturdayRecipe || sundayRecipe) {
    return <Loading />
  }

  return ( 
    <div className="days">
        <div className="recipe-days">
          <p><strong>Monday</strong></p>
          <p>{mondayRecipe.name}</p>
          <button>Go to recipe</button>
          <button>Pick another recipe</button>
          </div>
          <div className="recipe-days">
          <p><strong>Tuesday</strong></p>
          <p>{tuesdayRecipe.name}</p>
          <button>Go to recipe</button>
          <button>Pick another recipe</button>
          </div>
          <div className="recipe-days">
          <p><strong>Wednesday</strong></p>
          <p>{wednesdayRecipe.name}</p>
          <button>Go to recipe</button>
          <button>Pick another recipe</button>
          </div>
          <div className="recipe-days">
          <p><strong>Thursday</strong></p>
          <p>{thursdayRecipe.name}</p>
          <button>Go to recipe</button>
          <button>Pick another recipe</button>
          </div>
          <div className="recipe-days">
          <p><strong>Friday</strong></p>
          <p>{fridayRecipe.name}</p>
          <button>Go to recipe</button>
          <button>Pick another recipe</button>
          </div>
          <div className="recipe-days">
          <p><strong>Saturday</strong></p>
          <p>{saturdayRecipe.name}</p>
          <button>Go to recipe</button>
          <button>Pick another recipe</button>
          </div>
          <div className="recipe-days">
          <p><strong>Sunday</strong></p>
          <p>{sundayRecipe.name}</p>
          <button>Go to recipe</button>
          <button>Pick another recipe</button>
          </div>
      </div>
   );
}
 
export default MealPlan;