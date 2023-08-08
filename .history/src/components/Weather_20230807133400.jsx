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
    <section
      // Estilo de fondo y opacidad
      className={`${
        isDarkMode ? "bg-black bg-opacity-50 text-white" : "bg-white bg-opacity-70 text-black"
      } p-2 rounded-md bg-cover bg-center`}
      style={{
        // Imagen de fondo
        backgroundImage: `url(${
          isDarkMode
            ? "public/background/card_image002_Dark version.png"
            : "public/background/card_image001_LightVersion.png"
        })`,
      }}
    >
      {/* Sección de Información del Clima */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Columna Izquierda */}
        <div className="text-center">
          {/* Nombre de la Ciudad */}
          <h2 className="text-2xl font-bold mb-4">{weatherInfo?.name}</h2>
          {/* País */}
          <p className="text-xl mb-2">{weatherInfo?.sys?.country}</p>
          {/* Icono del Clima */}
          <div className="relative">
            {weatherInfo?.weather[0].icon ? (
              <img
                src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`}
                alt="Weather Icon"
                className="mx-auto h-24"
              />
            ) : null}
          </div>
        </div>
        {/* Columna Derecha */}
        <div className="flex flex-col items-center justify-center">
          {/* Temperatura Actual */}
          <div
            className={`text-3xl font-bold font-lato ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            {convertTemperature(weatherInfo?.main.temp)}
          </div>
          {/* Detalles del Clima */}
          <div className="flex justify-center space-x-6 mt-4">
            {/* Velocidad del Viento */}
            <div className="flex items-center flex-col">
              <img src="./images/wind.png" alt="Wind Icon" className="w-6 h-6" />
              <span className="text-lg">{weatherInfo?.wind.speed}m/s</span>
            </div>
            {/* Humedad */}
            <div className="flex items-center flex-col">
              <img
                src="./images/humidity.png"
                alt="Humidity Icon"
                className="w-6 h-6"
              />
              <span className="text-lg">{weatherInfo?.main.humidity}%</span>
            </div>
            {/* Presión Atmosférica */}
            <div className="flex items-center flex-col">
              <img
                src="./images/pressure.png"
                alt="Pressure Icon"
                className="w-6 h-6"
              />
              <span className="text-lg">{weatherInfo?.main.pressure}hPa</span>
            </div>
          </div>
          {/* Descripción del Clima */}
          <h3
            className={`${
              isDarkMode ? "text-white" : "text-black"
            } font-lato text-2xl font-light text-center mt-4`}
          >
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
      </section>
  

    </section>
  );
};

export default Weather;



