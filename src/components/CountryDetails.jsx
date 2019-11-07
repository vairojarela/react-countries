import React from "react";
import Border from "./Border";
import countries from "./countries.json";

const CountryDetails = props => {
  const { params } = props.match;
  const country = countries.find(item => item.cca3 === params.cca3);
  /*   const languages = Object.values(
    countries.find(item => item.cca3 === params.cca3)
  ); */
  const nativeName = Object.values(country.name.native)[0].common;
  console.log(country);
  return (
    <div className="col-7">
      <h2>{country.name.common}</h2>
      <h5>
        {country.region} - {country.subregion}
      </h5>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              <sup>{country.area} km2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              {country.borders.length ? (
                <ul style={ulStyle}>
                  {country.borders.map((country, index) => (
                    <Border
                      key={index}
                      countries={countries}
                      country={country}
                    />
                  ))}
                </ul>
              ) : (
                <p>This country doesn't border with any other.</p>
              )}
            </td>
          </tr>
          <tr>
            <td>Currency</td>
            <td>
              <span>{country.currency}</span>
            </td>
          </tr>
          <tr>
            <td>Native</td>
            <td>
              <span>{nativeName}</span>
            </td>
          </tr>
          {/* <tr>
            <td>Languages</td>
            <td>
              <ul style={ulStyle}>
                {languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

const ulStyle = { listStyle: "square" };

export default CountryDetails;
