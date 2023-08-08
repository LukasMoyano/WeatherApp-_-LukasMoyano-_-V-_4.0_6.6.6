import React, { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./components/Weather"; // Importa el componente Weather
import "./App.css";

function App() {
  // Estado para almacenar la información del clima
  const [weatherInfo, setWeatherInfo] = useState(null); 
  
  // Estado para el modo oscuro
  const [isDarkMode, setIsDarkMode] = useState(false); 
  
  // Determina la imagen de fondo según el modo
  const backgroundImage = isDarkMode ? "image002_DarkVersion.jpg" : "image001_LightVersion.jpg"; 

  // Efecto que obtiene la ubicación del usuario al cargar la página
  // Llama a la función success con la posición
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success); 
  }, []);

  // Función que se ejecuta al obtener la posición exitosamente
  const success = (pos) => {

    const lat = pos.coords.latitude; 
    const lon = pos.coords.longitude; 

    const API_KEY = "f61630c5193995d939b6b8024057b009"; 
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    // Realiza una solicitud GET a la API de OpenWeatherMap para obtener información sobre el clima
    axios
      .get(url)
      .then(({ data }) => setWeatherInfo(data)) 
      .catch((err) => console.log(err)); 
  };

  // Función para alternar el modo oscuro
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    // Contenedor principal que ajusta la altura mínima de la pantalla y cambia el tema según el modo oscuro
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      {/* Área principal que contiene el contenido y se ajusta según el modo oscuro */}
      <main
        className={`min-h-screen font-lato relative ${
          isDarkMode ? "bg-black bg-opacity-50 text-white" : "bg-white bg-opacity-70 text-black"
        }`}
        style={{
          // Fondo de la página que cambia según el modo oscuro
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
          {/* Texto dinámico del botón según el modo actual */}
          {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
        </button>
      </main>
    </div>
  );
  
}

export default App; // Exporta el componente App
