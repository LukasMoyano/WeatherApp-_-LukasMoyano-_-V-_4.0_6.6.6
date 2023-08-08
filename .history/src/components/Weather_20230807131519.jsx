import { Container } from "postcss";
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



<main className="p-4">
  <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">{weatherInfo?.name}</h2>
      <p className="text-xl mb-2">{weatherInfo?.sys?.country}</p>
    </div>
    <div className="flex flex-col items-center justify-center">
      {/* Temperatura actual */}
      <div className={`text-3xl font-bold font-lato ${isDarkMode ? "text-white" : "text-black"}`}>
        {convertTemperature(weatherInfo?.main.temp)}
      </div>
      {/* Información adicional sobre el clima */}
      <div className="flex justify-center space-x-6 mt-4">
        {/* Velocidad del viento */}
        <div className="flex items-center flex-col">
          <img src="./images/wind.png" alt="Wind Icon" className="w-6 h-6" />
          <span className="text-lg">{weatherInfo?.wind.speed}m/s</span>
        </div>
        {/* Humedad */}
        <div className="flex items-center flex-col">
          <img src="./images/humidity.png" alt="Humidity Icon" className="w-6 h-6" />
          <span className="text-lg">{weatherInfo?.main.humidity}%</span>
        </div>
        {/* Presión atmosférica */}
        <div className="flex items-center flex-col">
          <img src="./images/pressure.png" alt="Pressure Icon" className="w-6 h-6" />
          <span className="text-lg">{weatherInfo?.main.pressure}hPa</span>
        </div>
      </div>
      {/* Descripción del clima */}
      <h3 className={`${isDarkMode ? "text-white" : "text-black"} font-lato text-2xl font-light text-center mt-4`}>
        {weatherInfo?.weather[0].description}
      </h3>
    </div>
  </section>
</main>





    
  );
};

export default Weather;
