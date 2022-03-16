import React from "react";
import "./Country.css";

const Country = (props) => {
  return (
    <div className="country">
      <h3>{props.country.name.common} </h3>
      <h5>Population: {props.country.population}</h5>
      <p>Official Name: {props.country.officialName}</p>
      <p>Area: {props.country.area}</p>
    </div>
  );
};

export default Country;
