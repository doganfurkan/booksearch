import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/bookSlice";
import { changeSearchTerm } from "../redux/bookSlice";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <aside>
      <div id="logo">
        <h1>Book Search</h1>
        <button onClick={() => setMenuOpen(!menuOpen)}>&#8801;</button>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(fetchData([`${searchTerm}`, 0]));
          dispatch(changeSearchTerm(searchTerm));
          setSearchTerm("");
        }}
      >
        <div id="searchBox">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            required
          />
          <button>
            <img src="./assets/searchIcon.svg" alt="search" />
          </button>
        </div>
      </form>
      <div id="menu" className={menuOpen ? "active" : ""}>
        <nav>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Favorites
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            About
          </NavLink>
        </nav>
        <div id="otherProjects">
          <h2>My Social Accounts</h2>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          
          
        </div>
      </div>
    </aside>
  );
}
