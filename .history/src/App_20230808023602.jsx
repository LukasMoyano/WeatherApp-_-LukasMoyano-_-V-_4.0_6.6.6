import React, { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./components/Weather";
import "./App.css";
import SearchBar from "./components/SearchBar";
import PronosticWeather from "./components/PronosticWeather";
import Date_Hour from "./components/Date_Hour";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [city, setCity] = useState(null);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
const InfoCity = city === null ? weatherInfo : city

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const API_KEY = "f61630c5193995d939b6b8024057b009";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    axios
      .get(url)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => console.log(err));
  };

  const backgroundImage = isDarkMode
    ? "background/image002_DarkVersion.jpg"
    : "background/image001_LightVersion.jpg";

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <main
        className={`bg-cover bg-center min-h-screen font-lato p-2 grid grid-rows-[1fr_5fr_2fr_1fr_1fr] place-items-center ${
          isDarkMode ? "bg-black bg-opacity-50 text-white" : "bg-white bg-opacity-70 text-black"
        }`}
        style={{
          backgroundImage: `url(${backgroundImage})`

        }}
      >
        <SearchBar setCity={setCity} isDarkMode={isDarkMode} />
        <Weather InfoCity={InfoCity} isDarkMode={isDarkMode} />
        
        <Date_Hour isDarkMode={isDarkMode}/>
        
        <PronosticWeather/> ddddd
        <button
          onClick={toggleDarkMode}
          className={`absolute bottom-5 right-5 px-4 py-2 font-bold rounded ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
          }`}
        >
          {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
        </button>
      </main>
    </div>
  );
}

export default App;


