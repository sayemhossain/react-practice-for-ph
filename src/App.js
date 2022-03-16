import "./App.css";
import { useEffect, useState } from "react";

const name = "Sayem Hossain";
function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1>Visiting every country of the wrold!</h1>
    </div>
  );
}

export default App;
