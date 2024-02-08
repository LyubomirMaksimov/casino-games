// Navbar.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss"; // Import the Sass file

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <NavLink
            to="/coinflip"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Coin Flip
          </NavLink>
        </li>
        <li className="disabled">
          <NavLink
            to="/itemupgrader"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Item Upgrader
          </NavLink>
        </li>
        <li className="disabled">
          <NavLink
            to="/roulette"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Roulette
          </NavLink>
        </li>
        <li className="disabled">
          <NavLink
            to="/crashgame"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Crash Game
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
