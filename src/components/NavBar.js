import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
function NavBar({ title }) {
  console.log();
  return (
    <div>
      <nav className="  navbar navbar-expand-lg navbar-dark bg-dark">
        <span className=" navbar-brand mb-0 h1">
          <Link className="App-link" to="/">
            Elisabete
          </Link>
        </span>
        <ul style={{ marginLeft: "auto" }}>
          <Link className="App-link" to="/">
            Home
          </Link>
          <Link className="App-link" to="/about">
            About
          </Link>
          <Link className="App-link" to="/projects">
            Projects
          </Link>
          <Link className="App-link" to="/contact">
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
