import React from "react";
import "./Navigation.style.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <div className="nav_logo_list">
        <div className="nav_logo">
          <Link to="/">
            <img
              src="src/Navigation/img/netflix-logo.png"
              alt="logo"
              width={140}
            />
          </Link>
        </div>
        <ul className="nav_list">
          <li>
            <Link to="/" className="list_item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/movies" className="list_item">
              Movies
            </Link>
          </li>
        </ul>
      </div>
      <form>
        <input type="text" />
        <button>search</button>
      </form>
    </header>
  );
};

export default Navigation;
