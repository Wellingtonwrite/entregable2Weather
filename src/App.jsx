
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCards from './components/WeatherCards'


function App() {
    const [coords, setCoords] = useState()
    const [weather, setWeather] = useState()
    const [temp, setTemp] = useState()
    const [imagen, setImagen] = useState()

    useEffect(() => {
        const success = pos => {
            const obj = {
                lat: pos.coords.latitude,
                lon: pos.coords.longitude
            }
            setCoords(obj)
        }
        navigator.geolocation.getCurrentPosition(success)
    }, [])


    useEffect(() => {
        if (coords) {

            const Apikey = '1cf754b93760ba59ad6103995b93e5f1'
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${Apikey} `
            axios.get(url)
                .then(res => {
                    setWeather(res.data)
                    const obj = {
                        celsius: (res.data.main.temp - 273.15).toFixed(1),
                        farenheit: ((res.data.main.temp - 273.15) * 9 / 5 + 32).toFixed(1)
                    }
                    setTemp(obj)
                })
                .catch(err => console.log(err))
        }
    }, [coords])



    useEffect(() => {

        if (weather?.weather[0].description) {

            const Apikey = '39164414-d1b28daac25f3572fc3806030'
            const url = `https://pixabay.com/api/?key=${Apikey}&q=${weather?.weather[0].description}`
            axios.get(url)
                .then(res => setImagen(res.data))
                .catch(err => console.log(err))
        }
    }, [weather])

    return (

        <div >
            <WeatherCards
                weather={weather}
                temp={temp}
                imagen={imagen}

            />
        </div>

    )
}

export default App
