import React, { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./components/Weather"; // Importa el componente Weather
import "./App.css";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null); // Estado para almacenar la información del clima
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado para el modo oscuro
  const backgroundImage = isDarkMode ? "image002_DarkVersion.jpg" : "image001_LightVersion.jpg"; // Determina la imagen de fondo según el modo

  // Efecto que obtiene la ubicación del usuario al cargar la página
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success); // Llama a la función success con la posición
  }, []);

  // Función que se ejecuta al obtener la posición exitosamente
  const success = (pos) => {
    const lat = pos.coords.latitude; // Latitud
    const lon = pos.coords.longitude; // Longitud
    const API_KEY = "f61630c5193995d939b6b8024057b009"; // Clave de la API de OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    // Realiza una solicitud GET a la API de OpenWeatherMap para obtener información sobre el clima
    axios
      .get(url)
      .then(({ data }) => setWeatherInfo(data)) // Almacena los datos del clima en el estado
      .catch((err) => console.log(err)); // Manejo de errores
  };

  // Función para alternar el modo oscuro
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <main
        className={`min-h-screen font-lato relative ${
          isDarkMode ? "bg-black bg-opacity-50 text-white" : "bg-white bg-opacity-70 text-black"
        }`}
        style={{
          backgroundImage: `url(public/background/${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Renderiza el componente Weather con los datos del clima y el estado de modo oscuro */}
        <Weather weatherInfo={weatherInfo} isDarkMode={isDarkMode} />
  
        {/* Botón para alternar entre modo oscuro y modo claro */}
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

export default App; // Exporta el componente App
