import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = ({ setWeatherInfo }) => {
  const [city, setCity] = useState(null);
  const [suggestedCities, setSuggestedCities] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const API_KEY = "f61630c5193995d939b6b8024057b009";

  const handleCityChange = (event) => {
    const value = event.target.value;
    fetchWeatherData(value);
  };

  const fetchWeatherData = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    axios
      .get(url)
      .then(({ data }) => setCity(data))
      .catch((err) => console.log(err));
  };

  

  return (
    <main>
      <form>
        <input type="text" />
        <button type="submit">Search</button  >
      </form>
    </main>
  );
};

export default SearchBar;
