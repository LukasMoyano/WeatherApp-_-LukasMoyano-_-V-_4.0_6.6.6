import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = ({ setWeatherInfo }) => {
  const [city, setCity] = useState(null);
  const [suggestedCities, setSuggestedCities] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const API_KEY = "f61630c5193995d939b6b8024057b009";

  const handleCityChange = (event) => {
    event.preventDefault();
    const value = event.target.SearchCity.value;
    fetchWeatherData(value);
  };
console.log (city)

  const fetchWeatherData = (vale) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${vale}&appid=${API_KEY}`;

    axios
      .get(url)
      .then(({ data }) => setCity(data))
      .catch((err) => console.log(err));
  };

  

  return (
    <main>
      <form onSubmit={handleCityChange}>
        <input type="text" id="SearchCity"  />
        <button type="submit">Search</button  >
      </form>
    </main>
  );
};

export default SearchBar;
