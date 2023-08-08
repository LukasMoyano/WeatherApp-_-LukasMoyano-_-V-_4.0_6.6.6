import { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./components/Weather";
import "./App.css";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  const success = (pos) => {
    console.log(pos);

    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    console.log({ lat, lon });

    const API_KEY = "f61630c5193995d939b6b8024057b009";

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    console.log(url);

    axios
      .get(url)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => console.log(err));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <main
        className={`min-h-screen font-lato relative ${
          isDarkMode ? "bg-black bg-opacity-50 text-white" : "bg-white bg-opacity-70 text-black"
        }`}
      >
        <button
          onClick={toggleDarkMode}
          className={`absolute top-5 right-5 px-4 py-2 font-bold rounded ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
          }`}
        >
          {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
        </button>
        <Weather weatherInfo={weatherInfo} isDarkMode={isDarkMode} />
      </main>
    </div>
  );
}

export default App;
