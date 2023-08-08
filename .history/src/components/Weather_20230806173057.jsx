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
    >
      <div className=" relative w-337 h-231 flex-shrink-0">
        <p className="text-xl mb-2">{date}</p>
        <p className="text-xl">{time}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="345"
          height="235"
          viewBox="0 0 345 235"
          fill="none"
        >
          <g filter="url(#filter0_d_524_1390)">
            <path
              d="M4 22.975C4 9.04637 16.7799 -1.37654 30.4239 1.42433L323.424 61.5717C333.656 63.672 341 72.6772 341 83.1223V205C341 217.15 331.15 227 319 227H26C13.8497 227 4 217.15 4 205V22.975Z"
              fill="url(#paint0_linear_524_1390)"
            />
          </g>

          <defs>
            <div className="absolote">
              <h2 className="text-2xl font-bold mb-4">{weatherInfo?.name}</h2>
              <p className="text-2xl mb-2">{weatherInfo?.sys?.country}</p>
            </div>

            <filter
              id="filter0_d_524_1390"
              x="0"
              y="0.967285"
              width="345"
              height="234.033"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_524_1390"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_524_1390"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_524_1390"
              x1="4"
              y1="102.477"
              x2="341.023"
              y2="98.3204"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E5F2FF" />
              <stop offset="0.0001" stop-color="#E5F2FF" />
              <stop offset="1" stop-color="#D5F3FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col md:flex-row md:items-start mt-4">
        <div className="md:w-2/3 md:mr-4">
          <article className="mb-4 md:mb-0">
            <div className="relative">
              {weatherInfo?.weather[0].icon ? (
                <img
                  src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`}
                  alt="Weather Icon"
                  className="mx-auto h-24"
                />
              ) : null}
              <div className="absolute inset-0 bg-white opacity-50 rounded-lg"></div>
            </div>
            <h3 className="text-base mt-4 mb-2">
              {weatherInfo?.weather[0].description}
            </h3>
            <span className="text-4xl font-bold">
              {convertTemperature(weatherInfo?.main.temp)}
            </span>
          </article>
          <button
            onClick={toggleTemperatureUnit}
            className={`bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-auto block text-xs ${
              isDarkMode ? "bg-opacity-70" : "bg-opacity-100"
            }`}
          >
            C°/F°
          </button>
          <section className="grid grid-cols-3 g">
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
    </div>
  );
};

export default Weather;
