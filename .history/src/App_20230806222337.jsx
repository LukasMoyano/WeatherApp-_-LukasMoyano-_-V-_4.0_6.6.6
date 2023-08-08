// Importación de módulos y componentes necesarios
import React, { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./components/Weather"; // Importar el componente Weather
import "./App.css"; // Estilos globales de la aplicación

// Componente principal App
function App() {
  
// Estado para la información del clima
  const [weatherInfo, setWeatherInfo] = useState(null); 

  // Estado para controlar el modo oscuro
  const [isDarkMode, setIsDarkMode] = useState(false); 

// Determinar la imagen de fondo según el modo oscuro
  const backgroundImage = isDarkMode ? "image002_Dark version.jpg" : "image001_LightVersion.jpg"; 

  // Efecto de montaje para obtener la ubicación actual y cargar el clima
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success); // Obtener la ubicación actual
  }, []);

  // Función de éxito para la obtención de la ubicación
  const success = (pos) => {
    console.log(pos);

    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    console.log({ lat, lon });

    const API_KEY = "f61630c5193995d939b6b8024057b009";

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    console.log(url);

    // Realizar una solicitud a la API del clima
    axios
      .get(url)
      .then(({ data }) => setWeatherInfo(data)) // Actualizar el estado con la información del clima
      .catch((err) => console.log(err));
  };

  // Función para alternar el modo oscuro
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Cambiar el estado del modo oscuro
  };

  // Renderizar la interfaz de usuario
  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <main
        className={`min-h-screen font-lato relative ${
          isDarkMode ? "bg-black bg-opacity-50 text-white" : "bg-white bg-opacity-70 text-black"
        }`}
        style={{
          backgroundImage: `url(public/background/${backgroundImage})`, // Establecer la imagen de fondo dinámicamente
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Renderizar el componente Weather con la información del clima y el modo oscuro */}
        <Weather weatherInfo={weatherInfo} isDarkMode={isDarkMode} />
        
        {/* Botón para alternar el modo oscuro */}
        <button
          onClick={toggleDarkMode}
          className={`absolute bottom-5 right-5 px-4 py-2 font-bold rounded ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
          }`}
        >
          {/* Cambiar el texto del botón según el modo oscuro */}
          {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
        </button>
      </main>
    </div>
  );
}

// Exportar el componente App
export default App;
