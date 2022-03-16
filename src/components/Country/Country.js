import React from "react";
import "./Country.css";

const Country = (props) => {
  return (
    <div className="country">
      <h3>{props.name} </h3>
      <h5>Population: {props.population}</h5>
      <p>Official Name: {props.officialName}</p>
      <p>Area: {props.area}</p>
    </div>
  );
};

export default Country;
