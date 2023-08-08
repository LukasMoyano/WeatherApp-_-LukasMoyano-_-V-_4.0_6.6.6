import React, { useState } from "react";

const Weather = ({ InfoCity, isDarkMode }) => {
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
    "01n": "/iconsweatherstates_night/01n.png",
    "02n": "/iconsweatherstates_night/02n.png", 
    "03n": "/iconsweatherstates_night/03n.png",
    "04n": "/iconsweatherstates_night/04n.png",
    "09n": "/iconsweatherstates_night/09n.png",
    "10n": "/iconsweatherstates_night/10n.png",
    "11n": "/iconsweatherstates_night/11n.png",
    "13n": "/iconsweatherstates_night/13n.png",
    "50n": "/iconsweatherstates_night/50n.png",
    "01d": "/iconsweatherstates_day/01d.png",
    "02d": "/iconsweatherstates_day/02d.png",
    "03d": "/iconsweatherstates_day/03d.png",
    "04d": "/iconsweatherstates_day/04d.png",
    "09d": "/iconsweatherstates_day/09d.png",
    "10d": "/iconsweatherstates_day/10d.png",
    "11d": "/iconsweatherstates_day/11d.png",
    "13d": "/iconsweatherstates_day/13d.png",
    "50d": "/iconsweatherstates_day/50d.png",
  };

  return (
    <main className="grid place-items-center max-w-[600px] w-full">
      <section
        className={`w-full grid grid-rows-[1fr_5fr_1fr] place-items-center relative ${isDarkMode ? " text-white" : " text-black"}`}
      >
        {/* Nombre de la Ciudad */}
        {/* País */}
        <h1 className="text-center text-4xl pb-3">
          {InfoCity?.name}, {InfoCity?.sys?.country}
        </h1>

        <section className="absolute">
          {isDarkMode ? (
            <div>
              <img
                className=""
                src="public/background_info_cads/card_image002_Dark version.png"
              />
            </div>
          ) : (
            <div>
              <img
                className=""
                src="public/background_info_cads/card_image001_LightVersion.png"
              />
            </div>
          )}
        </section>

        <section className="min-[500px]:w-3/5 absolute z-10 grid grid-cols-2 justify-center-items-center">
          {/* Columna Izquierda */}
          <div className="flex flex-col gap-5 p-2 text-center">
            {/* Temperatura Actual */}
            <div
              className={` font-lato font-Lato text-6xl font-light leading-23 tracking-normal text-center text-blue-500
           ${isDarkMode ? "text-white" : "text-black"}`}
            >
              {convertTemperature(InfoCity?.main.temp)}
            </div>
            {/* Detalles del Clima */}
            <div className="font-Lato font-light text-center text-blue-500 grid grid-raws-3 gap-2">
              <div className="flex gap-3 text-lg ">
                <img
                  src="./images/wind.png"
                  alt="Wind Icon"
                  className="w-6 h-6"
                />
                {InfoCity?.wind.speed} m/s
              </div>
              <div className="flex gap-3 text-lg">
                <img
                  src="./images/humidity.png"
                  alt="Humidity Icon"
                  className="w-6 h-6"
                />
                {InfoCity?.main.humidity}%
              </div>
              <div className="flex gap-3 text-lg">
                <img
                  src="./images/pressure.png"
                  alt="Pressure Icon"
                  className="w-6 h-6"
                />
                {InfoCity?.main.pressure} hPa
              </div>
            </div>
          </div>

          {/* Columna Derecha */}
          <div className="grid grid-rows-[repeat(2,auto)]  items-center w-full  text-center">
            {/* Icono del Clima */}
            {InfoCity?.weather[0].icon && (
              <img
                className="w-full"
                src={`${iconspngweathers[InfoCity?.weather[0].icon]}`}
                alt="Weather Icon"
              />
            )}
            <h3 className="">{InfoCity?.weather[0].description}</h3>
          </div>
          {/* Botón para Alternar entre Celsius y Fahrenheit */}
          <section className="items-center mt-4 col-span-2">
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
    </main>
  );
};

export default Weather;
