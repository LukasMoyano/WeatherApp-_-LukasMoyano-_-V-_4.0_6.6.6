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


<button>
onClick={toggleDarkMode}
className={`text-white bg-gray-800 hover:bg-gray-700 text-sm font-bold py-2 px-4 rounded`}>
{isDarkMode ? "Light Mode" : "Dark Mode"}
</button>
<div className={`${darkMode(isDarkMode)} bg-white text-black`}>
<main className="bg-[url('/public/background/image001_LightVersion.jpg')] min-h-screen text-whte font-lato">
      <Weather weatherInfo={weatherInfo} />
    </main>
    
    </div>



  );
}

export default App;

{/* <main classeName= img="image001_LightVersion.jpg"> */}
 {/* <div className="default-background min-h-screen flex flex-col items-center justify-center"> */}
   {/* <div className="w-full md:max-w-md mx-auto bg-gradient-to-br from-blue-200 to-blue-500 rounded-lg shadow-lg p-4"> */}
     {/* <h1 className="text-center text-3xl font-bold mb-4 font-sans header"> */}
       {/* Lukas<div className="font-bold text-5xl">Weather</div>App 4.0</h1> */}
   {/* </div> */}
 {/* </div> */}
 {/* </main> */}
