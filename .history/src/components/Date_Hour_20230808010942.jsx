import React from 'react'

export const Date_Hour = () => {

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


      {/* Mostrar la Fecha y Hora */}
      <div className="text-center mt-4">
        <p
          className={`text-xl mb-2 ${isDarkMode ? "text-white" : "text-black"}`}
        >
          {date}
        </p>
        <p className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}>
          {time}
        </p>
      </div>


  
  )
}

export default Date_Hour