import React from 'react'

const LaGueder_aPpBotonModoDiaNoche = () => {
  return (
    <main>

    <div>LaGueder_aPpBotonModoDiaNoche</div>
            {/* Botón para alternar entre modo oscuro y modo claro */}
            <button
            onClick={toggleDarkMode}
            className={`absolute bottom-5 right-5 px-4 py-2 font-bold rounded ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
            }`}
          >
            {/* Texto dinámico del botón según el modo actual */}
            {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
          </button>
    </main>
  )
}

export default LaGueder_aPpBotonModoDiaNoche