import { useEffect, useState } from 'react'
import axios from 'axios'
import Weather from './components/Weather'
import './App.css'

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null)

  // Función para obtener la información del clima a partir de la geolocalización del usuario
  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY = "f61630c5193995d939b6b8024057b009"
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    // Realizar la solicitud HTTP a la API del clima
    axios.get(URL)
      .then(({ data }) => setWeatherInfo(data)) // Actualizar el estado con la información del clima
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    // Obtener la geolocalización del usuario al cargar la aplicación
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  return (
    //<main classeName= img="image001_LightVersion.jpg">

    // <div className="default-background min-h-screen flex flex-col items-center justify-center">
    //   <div className="w-full md:max-w-md mx-auto bg-gradient-to-br from-blue-200 to-blue-500 rounded-lg shadow-lg p-4">
    //     <h1 className="text-center text-3xl font-bold mb-4 font-sans header">
    //       Lukas<div className="font-bold text-5xl">Weather</div>App 4.0</h1>
    //     <Weather weatherInfo={weatherInfo} /> {/* Componente para mostrar la información del clima */}
    //   </div>
    // </div>
    
    // </main>
  )
}

export default App
