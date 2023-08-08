import React, { useState } from "react";

const Weather = ({ weatherInfo, isDarkMode }) => {
  // Estado para controlar la unidad de temperatura (Celsius o Fahrenheit)
  const [isCelsius, setIsCelsius] = useState(true);

  // Función para alternar entre Celsius y Fahrenheit
  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  // Función para convertir la temperatura a la unidad seleccionada
  const convertTemperature = (temperature) => {
    if (isCelsius) {
      return Math.round(temperature - 273.15) + "°C";
    } else {
      return Math.round(((temperature - 273.15) * 9) / 5 + 32) + "°F";
    }
  };

  // Función para obtener la fecha y hora actual
  const getCurrentDateTime = () => {
    const currentDate = new Date();
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const date = currentDate.toLocaleDateString(undefined, options);
    const time = currentDate.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    return { date, time };
  };

  // Obtener la fecha y hora actual
  const { date, time } = getCurrentDateTime();




  return (
    <div className="weather-app">
      <div className="left-column">
        <div className="weather-image">
          {/* Mostrar la imagen del estado del tiempo */}
          <img src="weather-image-url.jpg" alt="Weather" />
        </div>
        <div className="weather-state">
          {/* Mostrar el estado del tiempo */}
          {weatherData.weatherState}
        </div>
      </div>
      <div className="right-column">
        <div className="temperature">{weatherData.temperature}</div>
        <div className="weather-details">
          <div className="weather-detail">Wind: {weatherData.wind}</div>
          <div className="weather-detail">Clouds: {weatherData.clouds}</div>
          <div className="weather-detail">Pressure: {weatherData.pressure}</div>
        </div>
        <div className="city">{weatherData.city}</div>
      </div>
    </div>
  );






};

export default Weather;
