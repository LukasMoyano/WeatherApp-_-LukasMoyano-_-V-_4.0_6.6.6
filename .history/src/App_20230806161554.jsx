import { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./components/Weather";
import "./App.css";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false); // Agregamos el estado para el modo oscuro

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
    setIsDarkMode(!isDarkMode); // Cambia el estado del modo oscuro
  };

  return (
    <div className={`bg-${isDarkMode ? "gray-900" : "white"} min-h-screen text-${isDarkMode ? "white" : "black"}`}>
      <button
        onClick={toggleDarkMode}
        className={`text-white bg-gray-800 hover:bg-gray-700 text-sm font-bold py-2 px-4 rounded absolute top-4 right-4`}
      >
        {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
      </button>
      <main className={`bg-${isDarkMode ? "gray-900" : "white"} min-h-screen font-lato`}>
        <Weather weatherInfo={weatherInfo} isDarkMode={isDarkMode} /> {/* Pasar el estado del modo oscuro al componente Weather */}
      </main>
    </div>
  );
}

export default App;
