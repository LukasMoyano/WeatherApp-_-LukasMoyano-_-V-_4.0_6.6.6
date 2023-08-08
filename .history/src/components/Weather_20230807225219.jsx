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
<main>

<h2 className="text-1xl font-bold mb-4">{weatherInfo?.name}, {weatherInfo?.sys?.country}</h2>



<section className={`${
        isDarkMode
          ? <svg className="w-409 h-280.353 flex-shrink-0 filter drop-shadow(0px 4.854599475860596px 4.854599475860596px rgba(0, 0, 0, 0.25)) fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 419 285">
          <g filter="url(#filter0_d_702_1516)">
            <path d="M5 26.7381C5 9.83369 20.5103 -2.81603 37.0694 0.583237L392.669 73.581C405.086 76.1301 414 87.0593 414 99.7359V247.653C414 262.399 402.046 274.353 387.3 274.353H31.7003C16.9541 274.353 5 262.399 5 247.653V26.7381Z" fill="url(#paint0_linear_702_1516)"/>
          </g>
          <defs>
            <filter id="filter0_d_702_1516" x="0.145401" y="0.0283203" width="418.709" height="284.034" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4.8546"/>
              <feGaussianBlur stdDeviation="2.4273"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_702_1516"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_702_1516" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_702_1516" x1="5" y1="123.225" x2="414.028" y2="118.181" gradientUnits="userSpaceOnUse">
              <stop stop-color="#5836B3"/>
              <stop offset="0.0001" stop-color="#5936B4"/>
              <stop offset="1" stop-color="#362A84"/>
            </linearGradient>
          </defs>
        </svg>
        Asegúrate de que esta línea esté dentro del componente o elemento HTML donde deseas mostrar el SVG. Puedes ajustar las clases de acuerdo a tu configuración de Tailwind CSS.
        
        
        
        
        
        
          : "bg-white bg-opacity-70 text-black"
      } p-2 rounded-md bg-cover bg-center`}
      >
      <section className="flex justify-center-items-center">
        
        {/* Columna Izquierda */}
        <div className="w-1/2 p-2 text-center">

          {/* Temperatura Actual */}
          <div className={` font-lato font-Lato text-79 font-semibold leading-23 tracking-normal text-center text-blue-500
           ${isDarkMode ? "text-white" : "text-black"}`}>
            {convertTemperature(weatherInfo?.main.temp)}
          </div>
          {/* Detalles del Clima */}
          <div className="w-124 h-95 top-258 left-26 font-Lato text-79 font-light leading-95 tracking-normal text-center text-blue-500 grid grid-cols-3 gap-2 mt-4 font-lato font-bold leading-4 ">
            <div className="text-lg ">
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
      </section>
    </section>
          {/* Mostrar la Fecha y Hora */}
          <section className="text-center mt-4">
          <p className={`text-xl mb-2 ${isDarkMode ? "text-white" : "text-black"}`}>
            {date}
          </p>
          <p className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}>
            {time}
          </p>
        </section>
</main>
  );
};

export default Weather;
