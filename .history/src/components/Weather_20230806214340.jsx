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
    <div
      className={`my-auto mx-auto items-center justify-center p-4 rounded-lg text-center ${
        isDarkMode
          ? "bg-black bg-opacity-50 text-white"
          : "bg-white bg-opacity-70 text-black"
      }`}
      style={{
        backgroundImage: `url(${
          isDarkMode
            ? "public/background/image002_Dark version.jpg"
            : "public/background/image001_LightVersion.jpg"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative w-337 h-231 flex-shrink-0">
      <h2 className="text-2xl font-bold mb-4">{weatherInfo?.name}</h2>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="345"
          height="235"
          viewBox="0 0 345 235"
          fill="none"
        >
          {/* SVG path and definitions */}
        </svg>

      </div>

      <div className="flex flex-col md:flex-row md:items-start mt-4">
      <span className="text-4xl font-bold">{convertTemperature(weatherInfo?.main.temp)}</span>
            <div className="relative ml-4">
              {weatherInfo?.weather[0].icon ? (
                <img
                  src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`}
                  alt="Weather Icon"
                  className="mx-auto h-24"
                />
              ) : null}
              <div className="absolute inset-0 bg-white opacity-50 rounded-lg"></div>
            </div>
       
        <div className="md:w-2/3 md:mr-4">

 
{}


          

          <div className="flex items-center justify-center">
    
          </div>
          <h3 className="">{weatherInfo?.weather[0].description}</h3>


          <section className="grid grid-cols-3 gap-4 md:flex md:flex-row md:items-center">
            <article className="flex items-center justify-center flex-col">
              <div className="flex items-center">
                <img src="./images/wind.png" alt="Wind Icon" className="w-6 h-6 mr-2" />
                <span className="text-lg">{weatherInfo?.wind.speed}m/s</span>
              </div>
            </article>

            <article className="flex items-center justify-center flex-col">
              <div className="flex items-center">
                <img src="./images/humidity.png" alt="Humidity Icon" className="w-6 h-6 mr-2" />
                <span className="text-lg">{weatherInfo?.main.humidity}%</span>
              </div>
            </article>

           
          </section>


          <article className="flex items-center justify-center flex-col">
              <div className="flex items-center">
                <img src="./images/pressure.png" alt="Pressure Icon" className="w-6 h-6 mr-2" />
                <span className="text-lg">{weatherInfo?.main.pressure}hPa</span>
              </div>
            </article>


        </div>


      </div>

      <button
            onClick={toggleTemperatureUnit}
            className={`bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-auto block text-xs ${
              isDarkMode ? "bg-opacity-70" : "bg-opacity-100"
            }`}
          >
            C°/F°
          </button>

      <p className="text-xl mb-2">{date}</p>
      <p className="text-xl">{time}</p>
    </div>
  );
};

export default Weather;
