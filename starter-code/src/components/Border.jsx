import React from "react";
import { Link } from "react-router-dom";
const Border = ({ countries, country }) => {
  const borderCountry = countries.find(item => item.cca3 === country);
  return (
    <li>
      <Link to={`/${borderCountry.cca3}`}>{borderCountry.name.common}</Link>
    </li>
  );
};

export default Border;
