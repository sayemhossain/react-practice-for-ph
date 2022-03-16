/* eslint-disable no-unused-vars */
import "./App.css";
import { useState } from "react";

const name = "Sayem Hossain";
function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  return (
    <div>
      <h1>Visiting every country of the wrold!</h1>
    </div>
  );
}

export default App;
