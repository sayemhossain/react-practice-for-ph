import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, flags, capital, population, area, continents } = props.country;
  return (
    <div className="country">
      <img src={flags.png} alt="" />
      <h3>{name.common} </h3>
      <p>Official Name: {name.official}</p>
      <p>Caital: {capital}</p>
      <p>Continents: {continents}</p>
      <h5>Population: {population}</h5>
      <p>Area: {area}</p>
    </div>
  );
};

export default Country;
