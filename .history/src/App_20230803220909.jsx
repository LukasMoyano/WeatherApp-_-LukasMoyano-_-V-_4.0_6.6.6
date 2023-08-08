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
      .get(URL)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => console.log(err));
  };

  return (
    <main className="bg-image001_LightVersion min-h-screen text-whte font-lato">
      <h2>Weather</h2>
    </main>
  );
}

export default App;

//<main classeName= img="image001_LightVersion.jpg">
// <div className="default-background min-h-screen flex flex-col items-center justify-center">
//   <div className="w-full md:max-w-md mx-auto bg-gradient-to-br from-blue-200 to-blue-500 rounded-lg shadow-lg p-4">
//     <h1 className="text-center text-3xl font-bold mb-4 font-sans header">
//       Lukas<div className="font-bold text-5xl">Weather</div>App 4.0</h1>
//     <Weather weatherInfo={weatherInfo} /> {/* Componente para mostrar la información del clima */}
//   </div>
// </div>
// </main>
