import { Outlet, Link } from "react-router-dom";

import "./Layout.css";

const Layout = () => (
  <div className="Layout">
    <nav>
      <ul>
        <li className="grow">
          <Link to="/">Recipes</Link>
        </li>
        <li className="grow">
          <Link to="/mealplan">Meal plan</Link>
        </li>
        <li>
          <Link to="/create">
            <button type="button">Add New Recipe</button>
          </Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </div>
);

export default Layout;
