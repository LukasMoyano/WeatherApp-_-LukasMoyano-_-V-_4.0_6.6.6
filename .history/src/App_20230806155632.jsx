import { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./components/Weather";
import "./App.css";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);

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

    console.log(url)

    axios
      .get(url)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => console.log(err))
  };

  return (
    <div> {/* Contenedor de envoltura */}
      <button
        onClick={toggleDarkMode}
        className={`text-white bg-gray-800 hover:bg-gray-700 text-sm font-bold py-2 px-4 rounded`}
      >
        {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
      </button>
      <div className={`${darkMode(isDarkMode)} bg-white text-black`}>
        <main className="bg-[url('/public/background/image001_LightVersion.jpg')] min-h-screen text-white font-lato">
          <Weather weatherInfo={weatherInfo} />
        </main>
      </div>
    </div> 
  );
}

export default App;