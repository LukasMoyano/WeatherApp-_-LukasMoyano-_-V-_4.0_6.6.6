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



    <main className= "">
    <section >
      <h1>
      <h2 className="text-2xl font-bold mb-4">{weatherInfo?.name}</h2>
      <p className="text-2xl mb-2">{weatherInfo?.sys?.country}</p>

      </h1>
      <p>

      </p>
      <p>

      </p>
      <p>

      </p>
    </section>

    <section>
      <div>
        {/* Temperatura actual */}
        
                className={`text-3xl font-bold font-lato ${
                  isDarkMode ? "text-white" : "text-black"
                }`}>
                {convertTemperature(weatherInfo?.main.temp)}

      </div>
      <div>
        {/* Información adicional sobre el clima */}

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
<div>
        <h3
                {/* Descripción del clima */}

          className={`${
            isDarkMode ? "text-white" : "text-black"
          } font-lato text-2xl font-light text-center`}
        >
          {weatherInfo?.weather[0].description}
        </h3>
        </div>
          </article>
        </section>
      </div>


      </div>

    </section>
    </main>



    
  );
};

export default Weather;
