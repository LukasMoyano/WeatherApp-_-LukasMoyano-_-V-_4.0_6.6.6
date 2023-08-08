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
    <div className="">
      {/* Sección de información del clima */}
      <div className="flex flex-col md:flex-row md:items-start mt-4">

        <div className="md:w-2/3 md:mr-4">
         
         
          
          <div className="flex items-center justify-center">
            
            

          </div>


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
////////////////////////// /        

                {/* Temperatura actual */}
                <span className="text-4xl font-bold">
              {convertTemperature(weatherInfo?.main.temp)}
            </span>
            <div className="relative ml-4">
             
             
              {/* Icono del clima */}
              {weatherInfo?.weather[0].icon ? (
                <img
                  src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`}
                  alt="Weather Icon"
                  className="mx-auto h-24"
                />
              ) : null}
             
             

            </div>

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
{/* Nombre de la ciudad */}
<h2 className="text-2xl font-bold mb-4">{weatherInfo?.name}</h2>

          {/* Descripción del clima */}
          <h3 className="">{weatherInfo?.weather[0].description}</h3>
          </section>
          /////////////////////////////////////////////

        </div>

      </div>

      {/* Botón para alternar entre Celsius y Fahrenheit */}
      <button
        onClick={toggleTemperatureUnit}
        className={`bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-auto block text-xs ${
          isDarkMode ? "bg-opacity-70" : "bg-opacity-100"
        }`}
      >
        C°/F°
      </button>

      {/* Mostrar la fecha y hora */}
      <p className="text-xl mb-2">{date}</p>
      <p className="text-xl">{time}</p>
    </div>
  );
};

export default Weather;
