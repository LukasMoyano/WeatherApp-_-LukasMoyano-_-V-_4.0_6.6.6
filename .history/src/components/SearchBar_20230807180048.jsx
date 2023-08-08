import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const [predictions, setPredictions] = useState([]);

  const getPredictions = async () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={YOUR_API_KEY}`;
    const response = await axios.get(apiUrl);
    const data = response.data;
    setPredictions(data.results);
  };

  useEffect(() => {
    getPredictions();
  }, [city]);

  const handleChange = (event) => {
    setCity(event.target.value);
    getPredictions();
  };

  const renderPredictions = () => {
    if (predictions.length === 0) {
      return (
        <p>No predictions found.</p>
      );
    }

    return (
      <ul>
        {predictions.map((prediction) => (
          <li key={prediction.id}>
            {prediction.name} ({prediction.country})
          </li>
        ))}
      </ul>
    );
  };

  return (
    <main>
      <label>
        <input
          type="text"
          value={city}
          onChange={handleChange}
        />
      </label>
      {renderPredictions()}
    </main>
  );
};

export default SearchBar;
