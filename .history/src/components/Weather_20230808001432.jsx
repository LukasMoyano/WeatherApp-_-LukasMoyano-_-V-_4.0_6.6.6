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

const iconspngweathers = {
  "01n":"public/iconsweatherstates_day/01n.png",
  "02n":"public/iconsweatherstates_day/02n.png",
  "03n":"public/iconsweatherstates_day/03n.png",
  "04n":"public/iconsweatherstates_day/04n.png",
  "09n":"public/iconsweatherstates_day/09n.png",
  "10n":"public/iconsweatherstates_day/10n.png",
  "11n":"public/iconsweatherstates_day/11n.png",
  "13n":"public/iconsweatherstates_day/13n.png",
  "50n":"public/iconsweatherstates_day/50n.png",
  "01d":"public/iconsweatherstates_day/01d.png",
  "02d":"public/iconsweatherstates_day/02d.png",
  "03d":"public/iconsweatherstates_day/03d.png",
  "04d":"public/iconsweatherstates_day/04d.png",
  "09d":"public/iconsweatherstates_day/09d.png",
  "10d":"public/iconsweatherstates_day/10d.png",
  "11d":"public/iconsweatherstates_day/11d.png",
  "13d":"public/iconsweatherstates_day/13d.png",
  "50d":"public/iconsweatherstates_day/50d.png",
}

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





<section className= {`relative ${
        isDarkMode
          ? " text-white"
          : " text-black"
      }`}    
      >
        <section className="absolute ">
{isDarkMode ? <img src="public/background_info_cads/card_image002_Dark version.png"/> : <img src="public/background_info_cads/card_image001_LightVersion.png"/>}
  
        </section>


      <section className="absolute z-10 grid grid-cols-2 justify-center-items-center">
        
        {/* Columna Izquierda */}
        <div className="w-1/2 p-2 text-center">

          {/* Temperatura Actual */}
          <div className={` font-lato font-Lato text-7xl font-light leading-23 tracking-normal text-center text-blue-500
           ${isDarkMode ? "text-white" : "text-black"}`}>
            {convertTemperature(weatherInfo?.main.temp)}
          </div>
          {/* Detalles del Clima */}
          <div className="font-Lato text-79 font-light text-center text-blue-500 grid grid-raws-3 gap-2">
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
          <h1 className="w-full h-full flex items-center justify-center font-Lato text-sm font-light">
  {weatherInfo?.name}, {weatherInfo?.sys?.country}
</h1>
        </div>
        
        {/* Columna Derecha */}
        <div className="flex-col flex w-full justify-between text-center">
          {/* Icono del Clima */}
          {weatherInfo?.weather[0].icon && (
            <img src={`${iconspngweathers[weatherInfo?.weather[0].icon]}`} alt="Weather Icon" className="" />
          )}
          <h3 className="text-base mt-4 mb-2">
            {weatherInfo?.weather[0].description}
          </h3>
        </div>
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
