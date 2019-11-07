import React from "react";
import countries from "../countries.json.js";
import { Link } from "react-router-dom";

const SideNav = () => {
  const sideNavStyles = {
    maxHeight: "90vh",
    overflowY: "scroll",
    overflowX: "hidden"
  };
  return (
    <div className="col-5" style={sideNavStyles}>
      <div className="list-group">
        {countries.map((country, index) => {
          return (
            <Link key={index} to={`/` + country.cca3}>
              <p>
                {country.flag} {country.name.common}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
