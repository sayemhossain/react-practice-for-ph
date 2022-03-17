import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, flags, capital, population, area } = props.country;
  return (
    <div className="country">
      <img src={flags.png} alt="" />
      <h3>{name.common} </h3>
      <p>Capital: {capital}</p>
      <h5>Population: {population}</h5>
      <p>Official Name: {name.official}</p>
      <p>Area: {area}</p>
    </div>
  );
};

export default Country;
