import React, { useState } from 'react'

const WeatherCards = ({ weather, temp, imagen }) => {

    const [isCelsius, setIsCelsius] = useState(true)

    const handleChangeTemp = () => setIsCelsius(!isCelsius)

    const objStyle = {
        backgroundImage: `url(${imagen?.hits[2].largeImageURL})`,
        height: "100vh",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    

    return (
        <div className='weather_card_app' style={objStyle}>
            <article className='weather_card_container'>
                <h1 className='weather_card_title' >Weather App</h1>
                <h2 className='weather_card_subtitle'>{weather?.name},{weather?.sys.country}</h2>
                <div>
                    <section className='weather_card_featureAll'>
                        <h3 className='weather_card_featureAll_title'>"{weather?.weather[0].description}"</h3>
                        <div className='weather_card_featureWeather'>
                            <div className="weather_card_img_cloud">
                                <img
                                    className='weather_card_iconWeather'
                                    src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                    alt=""
                                />
                            </div>
                            <ul>
                                <li><span>Wind Speed: </span><span>{weather?.wind.speed} m/s</span></li>
                                <li><span>Clouds: </span><span>{weather?.clouds.all} %</span></li>
                                <li><span>Pressure: </span><span>{weather?.main.pressure} hPa</span></li>
                            </ul>
                        </div>
                    </section>
                </div>
                    <h2 className='weather_card_temp'>{isCelsius ? `${temp?.celsius}  ºC` : `${temp?.farenheit}  ºF`}</h2>
                    <button className='weather_card_changeTemp' onClick={handleChangeTemp}>{isCelsius ? 'Change to ºF' : 'Change to ºC'}</button>
            </article>
        </div>



    )

}

export default WeatherCards