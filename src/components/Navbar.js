import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen,setMenuOpen] = useState(false);

  return (
    <aside>
      <div id="logo">
        <h1>Book Search</h1>
        <button onClick={() => setMenuOpen(!menuOpen)}>&#8801;</button>
      </div>
      <form action="/">
        <div id="searchBox">
          <input type="text" placeholder="Search" />
          <button>
            <img src="./assets/searchIcon.svg" alt="search" />
          </button>
        </div>
      </form>
      <div id="menu" className={menuOpen ? "active" : ""}>
        <nav>
          <a href="#home">Home</a>
          <a href="#favorites">Favorites</a>
          <a href="#about">About</a>
        </nav>
        <div id="otherProjects">
          <h2>My Other Projects</h2>
          <a
            href="https://doganfurkan.github.io/Furcar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rent A Car Website
          </a>
          <a
            href="https://bmi-calculator-fd.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            BMI Calculator
          </a>
          <a
            href="https://doganfurkan.github.io/easybank-landing-page-master"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bank Website
          </a>
          <a
            href="https://country-fd.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Country List App
          </a>
          <a
            href="https://weatherredux.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Weather App
          </a>
        </div>
      </div>
    </aside>
  );
}
