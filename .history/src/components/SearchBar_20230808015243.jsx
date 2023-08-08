import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = ({ setWeatherInfo }) => {
  const [city, setCity] = useState("");
  const [suggestedCities, setSuggestedCities] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const API_KEY = "f61630c5193995d939b6b8024057b009";

  const handleCityChange = (event) => {
    const value = event.target.value;
    setCity(value);
    if (value) {
      fetchSuggestedCities(value);
    } else {
      setSuggestedCities([]);
    }
  };


  const handleSuggestionClick = (suggestion) => {
    setCity(suggestion.name);
    setSuggestedCities([]);
  };

  const handleSearch = () => {
    if (city.trim() !== "") {
      fetchWeatherData(city);
    }
  };

  const fetchWeatherData = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    axios
      .get(url)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        handleSearch();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [city]);

  return (
    <main>
      <label>
        <input
          type="text"
          value={city}
          placeholder="Search for a city..."
          onChange={handleCityChange}
        />
        {suggestedCities.length > 0 && (
          <ul className="suggestions">
            {suggestedCities.map((suggestion) => (
              <li
                key={suggestion.id}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.name}, {suggestion.sys.country}
              </li>
            ))}
          </ul>
        )}
        <button onClick={handleSearch} disabled={isFetching}>
          Search City
        </button>
      </label>
    </main>
  );
};

export default SearchBar;
