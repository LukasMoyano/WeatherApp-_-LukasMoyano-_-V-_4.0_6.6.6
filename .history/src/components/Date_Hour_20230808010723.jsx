import React from 'react'

export const Date_Hour = () => {
  return (
    <div>

      {/* Mostrar la Fecha y Hora */}
      <section className="text-center mt-4">
        <p
          className={`text-xl mb-2 ${isDarkMode ? "text-white" : "text-black"}`}
        >
          {date}
        </p>
        <p className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}>
          {time}
        </p>
      </section>


    </div>
  )
}
