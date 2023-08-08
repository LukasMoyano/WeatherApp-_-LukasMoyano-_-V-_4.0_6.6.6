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
      {/* Rest of the Weather component code */}
    </div>
  );
};

export default Weather;
