import React, { useState } from "react";

const Weather = ({ weatherInfo, isDarkMode }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const convertTemperature = (temperature) => {
    if (isCelsius) {
      return Math.round(temperature - 273.15) + "°C";
    } else {
      return Math.round(((temperature - 273.15) * 9) / 5 + 32) + "°F";
    }
  };

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

  const { date, time } = getCurrentDateTime();

  return (
    <main
      className={`${
        isDarkMode
          ? "bg-black bg-opacity-50 text-white"
          : "bg-white bg-opacity-70 text-black"
      } p-2 rounded-md bg-cover bg-center`}
      style={{
        backgroundImage: `url(${
          isDarkMode
            ? "public/background/card_image002_Dark version.png"
            : "public/background/card_image001_LightVersion.png"
        })`,
      }}
    >
      <section className="flex">
        {/* Columna Izquierda */}
        <div className="w-1/2 p-2 text-center">
          {/* Temperatura Actual */}
          <div className={`text-3xl font-bold font-lato ${
            isDarkMode ? "text-white" : "text-black"
          }`}>
            {convertTemperature(weatherInfo?.main.temp)}
          </div>
          {/* Detalles del Clima */}
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="text-lg">
              <img src="./images/wind.png" alt="Wind Icon" className="w-6 h-6" />
              {weatherInfo?.wind.speed} m/s
            </div>
            <div className="text-lg">
              <img src="./images/humidity.png" alt="Humidity Icon" className="w-6 h-6" />
              {weatherInfo?.main.humidity}%
            </div>
            <div className="text-lg">
              <img src="./images/pressure.png" alt="Pressure Icon" className="w-6 h-6" />
              {weatherInfo?.main.pressure} hPa
            </div>
          </div>
          {/* Nombre de la Ciudad */}{/* País */}
          <h2 className="text-1xl font-bold mb-4">{weatherInfo?.name}, {weatherInfo?.sys?.country}</h2>
          
        </div>
        
        {/* Columna Derecha */}
        <div className="w-1/2 p-2 text-center">
          {/* Icono del Clima */}
          {weatherInfo?.weather[0].icon && (
            <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="Weather Icon" className="mx-auto h-24" />
          )}
          <h3 className="text-base mt-4 mb-2">
            {weatherInfo?.weather[0].description}
          </h3>
        </div>
      </section>

      {/* Botón para Alternar entre Celsius y Fahrenheit */}
      <section className="flex items-center justify-center mt-4">
        <button
          onClick={toggleTemperatureUnit}
          className={`bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto block text-xs ${
            isDarkMode ? "bg-opacity-70" : "bg-opacity-100"
          }`}
        >
          C°/F°
        </button>

    </main>
  );
};

export default Weather;
