import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/bookSlice";
import { changeSearchTerm } from "../redux/bookSlice";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  return (
    <aside>
      <div id="logo">
        <Link to={""}><h1>Book Search</h1></Link>
        <button onClick={() => setMenuOpen(!menuOpen)}>&#8801;</button>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(fetchData([`${searchTerm}`, 0]));
          dispatch(changeSearchTerm(searchTerm));
          setSearchTerm("");
          navigate("")
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
          <h2>My Other Projects</h2>
          <a
            href="https://doganfurkan.github.io/Furcar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rent A Car Demo
          </a>
          <a
            href="https://weatherredux.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Weather App
          </a>
          <a
            href="https://doganfurkan.github.io/easybank-landing-page-master/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bank Demo
          </a>
          <a
            href="https://country-fd.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Country Infos App
          </a>          
        </div>
      </div>
    </aside>
  );
}
