import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          WikiCountries
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
