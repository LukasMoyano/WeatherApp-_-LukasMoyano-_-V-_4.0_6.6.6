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
    <div className="weather-app flex flex-row">
      <div className="left-column flex flex-col items-center justify-center">
        <div className="weather-image">
          {/* Mostrar la imagen del estado del tiempo */}
          {weatherInfo?.weather[0].icon ? (
            <img
              src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`}
              alt="Weather Icon"
            />
          ) : null}
        </div>
        <div className={`weather-state ${isDarkMode ? "text-white" : "text-black"}`}>
          {/* Mostrar el estado del tiempo */}
          {weatherInfo?.weather[0].description}
        </div>
      </div>
      <div className="right-column flex flex-col justify-between">
        <div className={`temperature ${isDarkMode ? "text-white" : "text-black"}`}>
          {/* Mostrar la temperatura actual */}
          {convertTemperature(weatherInfo?.main.temp)}
        </div>
        <div className="weather-details">
          <div className={`weather-detail ${isDarkMode ? "text-white" : "text-black"}`}>
            {/* Mostrar detalles del clima */}
            Wind: {weatherInfo?.wind.speed}m/s
          </div>
          <div className={`weather-detail ${isDarkMode ? "text-white" : "text-black"}`}>
            Clouds: {weatherInfo?.clouds.all}%
          </div>
          <div className={`weather-detail ${isDarkMode ? "text-white" : "text-black"}`}>
            Pressure: {weatherInfo?.main.pressure}hPa
          </div>
        </div>
        <div className={`city ${isDarkMode ? "text-white" : "text-black"}`}>
          {/* Mostrar el nombre de la ciudad */}
          {weatherInfo?.name}
        </div>
      </div>
      {/* Botón para alternar entre Celsius y Fahrenheit */}
      <button
        onClick={toggleTemperatureUnit}
        className={`bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto block text-xs ${
          isDarkMode ? "bg-opacity-70" : "bg-opacity-100"
        }`}
      >
        C°/F°
      </button>
      {/* Mostrar la fecha y hora */}
      <div className="time-info">
        <p className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}>{date}</p>
        <p className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}>{time}</p>
      </div>
    </div>
  );
};

export default Weather;
