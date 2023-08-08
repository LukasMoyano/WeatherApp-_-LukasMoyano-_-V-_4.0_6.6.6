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
    <div className="flex flex-col justify-between h-full">
      {/* Sección de información del clima */}
      <div className="flex flex-col md:flex-row md:items-start mt-4">
        <div className="md:w-2/3 md:mr-4">
{/* Nombre de la ciudad */}
<h2 className="text-2xl font-bold mb-4 text-center font-lato text-xl font-semibold">
  {weatherInfo?.name}
</h2>

          {/* Sección de icono y temperatura actual */}
          <div className="flex items-center justify-center">
            {/* Icono del clima */}
            <div className="relative mr-4">
              {weatherInfo?.weather[0].icon ? (
                <img
                  src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`}
                  alt="Weather Icon"
                  className="mx-auto h-24"
                />
              ) : null}
              {/* Efecto de fondo */}
              <div
                className={`${
                  isDarkMode ? "bg-black bg-opacity-50 text-white" : "bg-white bg-opacity-70 text-black"
                } absolute inset-0 rounded-lg`}
                style={{
                  backgroundImage: `url(${
                    isDarkMode
                      ? "../public/background/card_image002_Dark version.png"
                      : "../public/background/card_image001_LightVersion.png"
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>

            {/* Temperatura actual */}
            <span
              className={`text-4xl font-bold font-lato ${
                isDarkMode ? "text-white" : "text-black"
              }`}
              style={{ fontFamily: "Lato", fontSize: "13px", fontStyle: "normal", fontWeight: 300, lineHeight: "normal" }}
            >
              {convertTemperature(weatherInfo?.main.temp)}
            </span>
          </div>

          {/* Descripción del clima */}
          <h3
            className={`${
              isDarkMode ? "text-white" : "text-black"
            }`}
            style={{ fontFamily: "Lato", fontSize: "13px", fontStyle: "normal", fontWeight: 300, lineHeight: "normal" }}
          >
            {weatherInfo?.weather[0].description}
          </h3>

          {/* Información adicional sobre el clima */}
          <section
            className={`${
              isDarkMode ? "bg-black bg-opacity-50 text-white" : "bg-white bg-opacity-70 text-black"
            } p-2 rounded-md`}
            style={{
              backgroundImage: `url(${
                isDarkMode
                  ? "public/background/card_image002_Dark version.png"
                  : "public/background/card_image001_LightVersion.png"
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Velocidad del viento */}
            <article className="flex items-center justify-center flex-col">
              <div className="flex items-center">
                <img
                  src="./images/wind.png"
                  alt="Wind Icon"
                  className="w-6 h-6 mr-2"
                />
                <span className="text-lg">{weatherInfo?.wind.speed}m/s</span>
              </div>
            </article>

            {/* Humedad */}
            <article className="flex items-center justify-center flex-col">
              <div className="flex items-center">
                <img
                  src="./images/humidity.png"
                  alt="Humidity Icon"
                  className="w-6 h-6 mr-2"
                />
                <span className="text-lg">{weatherInfo?.main.humidity}%</span>
              </div>
            </article>

            {/* Presión atmosférica */}
            <article className="flex items-center justify-center flex-col">
              <div className="flex items-center">
                <img
                  src="./images/pressure.png"
                  alt="Pressure Icon"
                  className="w-6 h-6 mr-2"
                />
                <span className="text-lg">{weatherInfo?.main.pressure}hPa</span>
              </div>
            </article>
          </section>
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
      <p className={`text-xl mb-2 ${isDarkMode ? "text-white" : "text-black"}`}>
        {date}
      </p>
      <p className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}>
        {time}
      </p>
    </div>
  );


  // return (
  //   <div className="weather-app">
  //     <div className="left-column">
  //       <div className="weather-image">
  //         {/* Mostrar la imagen del estado del tiempo */}
  //         <img src="weather-image-url.jpg" alt="Weather" />
  //       </div>
  //       <div className="weather-state">
  //         {/* Mostrar el estado del tiempo */}
  //         {weatherData.weatherState}
  //       </div>
  //     </div>
  //     <div className="right-column">
  //       <div className="temperature">{weatherData.temperature}</div>
  //       <div className="weather-details">
  //         <div className="weather-detail">Wind: {weatherData.wind}</div>
  //         <div className="weather-detail">Clouds: {weatherData.clouds}</div>
  //         <div className="weather-detail">Pressure: {weatherData.pressure}</div>
  //       </div>
  //       <div className="city">{weatherData.city}</div>
  //     </div>
  //   </div>
  // );






};

export default Weather;
