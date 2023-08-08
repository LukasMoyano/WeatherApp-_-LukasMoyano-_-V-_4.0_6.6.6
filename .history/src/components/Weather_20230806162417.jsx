import { useState } from "react";

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
    <section className={`my-auto mx-auto items-center justify-center p-4 rounded-lg text-center ${isDarkMode ? "bg-black bg-opacity-50 text-white" : "bg-white bg-opacity-70 text-black"}`}>



<div className="flex flex-col md:flex-row md:items-start mt-4">
<div className="md:w-2/3 md:mr-4">
  <article className="mb-4 md:mb-0">
    {/* Icono del clima */}
    <div className="relative">
      {weatherInfo?.weather[0].icon ? (
        <img
          src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`}
          alt="Weather Icon"
          className="mx-auto h-24"
        />
      ) : null}
      {/* Superposición para efecto de sombreado */}
      <div className="absolute inset-0 bg-white opacity-50 rounded-lg"></div>
    </div>
    <h3 className="text-base mt-4 mb-2">
      {weatherInfo?.weather[0].description}{" "}
      {/* Mostrar la descripción del clima */}
    </h3>
    <span className="text-4xl font-bold">
      {convertTemperature(weatherInfo?.main.temp)}{" "}
      {/* Mostrar la temperatura convertida */}
    </span>
  </article>
  <button
    onClick={toggleTemperatureUnit}
    className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-auto block text-xs"
  >
    C°/F°
  </button>{" "}
  {/* Botón para cambiar la unidad de temperatura */}
  <section className="grid grid-cols-3 g">
    <article className="flex items-center justify-center flex-col">
      <div className="flex items-center">
        <img
          src="./images/wind.png"
          alt="Wind Icon"
          className="w-6 h-6 mr-2"
        />
        <span className="text-lg">{weatherInfo?.wind.speed}m/s</span>{" "}
        {/* Mostrar la velocidad del viento */}
      </div>
    </article>

    <article className="flex items-center justify-center flex-col">
      <div className="flex items-center">
        <img
          src="./images/humidity.png"
          alt="Humidity Icon"
          className="w-6 h-6 mr-2"
        />
        <span className="text-lg">{weatherInfo?.main.humidity}%</span>{" "}
        {/* Mostrar la humedad */}
      </div>
    </article>

    <article className="flex items-center justify-center flex-col">
      <div className="flex items-center">
        <img
          src="./images/pressure.png"
          alt="Pressure Icon"
          className="w-6 h-6 mr-2"
        />
        <span className="text-lg">{weatherInfo?.main.pressure}hPa</span>{" "}
        {/* Mostrar la presión */}
      </div>
    </article>
  </section>
</div>
</div>    </section>
  );
};

export default Weather;

