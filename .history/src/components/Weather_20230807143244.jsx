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
        isDarkMode
          ? "bg-black bg-opacity-50 text-white"
          : "bg-white bg-opacity-70 text-black"
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
      {/* Columna Izquierda */}

      <div className="flex flex-col items-center justify-center">
        {/* Temperatura Actual */}
        <div
          className={`text-3xl font-bold font-lato ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          {convertTemperature(weatherInfo?.main.temp)}
        </div>
      </div>

      <section className="relative w-1/2 p-2 text-center flex mb-2 gap-0">
        <div className="w-1/2 p-2 text-center">
          {/* Detalles del Clima */}
          <div className="">
            {/* Velocidad del Viento */}
            <h4 className="flex items-center flex-col">
              <img
                src="./images/wind.png"
                alt="Wind Icon"
                className="w-6 h-6"
              />
              <span className="text-lg">{weatherInfo?.wind.speed}m/s</span>
            </h4>
            {/* Humedad */}
            <h4 className="flex items-center flex-col">
              <img
                src="./images/humidity.png"
                alt="Humidity Icon"
                className="w-6 h-6"
              />
              <span className="text-lg">{weatherInfo?.main.humidity}%</span>
            </h4>
            {/* Presión Atmosférica */}
            <h4 className="flex items-center flex-col">
              <img
                src="./images/pressure.png"
                alt="Pressure Icon"
                className="w-6 h-6"
              />
              <span className="text-lg">{weatherInfo?.main.pressure}hPa</span>
            </h4>
            {/* Nombre de la Ciudad */}
            <h2 className="text-2xl font-bold mb-4">{weatherInfo?.name}</h2>
            {/* País */}
            <p className="text-xl mb-2">{weatherInfo?.sys?.country}</p>
          </div>
<section>          {/* Columna Derecha */}

{/* Icono del Clima */}
<div className="absolute">
  {weatherInfo?.weather[0].icon ? (
    <img
      src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`}
      alt="Weather Icon"
      className="mx-auto h-24"
    />
  ) : null}
</div>
</section>

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

      {/* Mostrar la Fecha y Hora */}
      <section className="text-center mt-4">
        <p
          className={`text-xl mb-2 ${isDarkMode ? "text-white" : "text-black"}`}
        >
          {date}
        </p>
        <p className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}>
          {time}
        </p>
      </section>
    </section>
  );
};

export default Weather;
