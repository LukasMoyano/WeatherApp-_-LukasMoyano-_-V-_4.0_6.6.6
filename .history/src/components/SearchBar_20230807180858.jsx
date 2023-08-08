import React, { useState, useEffect } from "react";


const success = (pos) => {

    const lat = pos.coords.latitude; 
    const lon = pos.coords.longitude; 

    const API_KEY = "f61630c5193995d939b6b8024057b009"; 
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    // const url = 'https://api.openweathermap.org/data/2.5/weather?id=524901&lang=es&appid={API key}'

    // Realiza una solicitud GET a la API de OpenWeatherMap para obtener información sobre el clima
    axios
      .get(url)
      .then(({ data }) => setWeatherInfo(data)) 
      .catch((err) => console.log(err)); 
  };

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const [suggestedCities, setSuggestedCities] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const handleCityChange = (event) => {
    const value = event.target.value;
    setCity(value);
    if (value) {
      fetchSuggestedCities(value);
    } else {
      setSuggestedCities([]);
    }
  };

  const fetchSuggestedCities = async (query) => {
    setIsFetching(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/find?q=${query}&type=like&cnt=5&appid=${API_KEY}`
      );
      const data = await response.json();
      setSuggestedCities(data.list);
    } catch (error) {
      console.error("Error fetching suggested cities:", error);
    } finally {
      setIsFetching(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setCity(suggestion.name);
    setSuggestedCities([]);
  };

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city);
      setCity("");
      setSuggestedCities([]);
    }
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
          Search
        </button>
      </label>
    </main>
  );
};

export default SearchBar;
