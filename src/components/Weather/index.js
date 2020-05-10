import React from "react";
import "./Weather.css"

import Time from '../Time'
import SearchCity from '../SearchCity'
import CurrentWeather from '../CurrentWeather'
import ForecastWeather from '../ForecastWeather'
import CityPhoto from '../CityPhoto'

export default function Weather({ currentWeather, forecastWeather, onCitySearch, onCityChange, photo }) {
    return (
        <div className="weather">
            <div className="weather__header">
                <div className="weather__left">
                    <Time />
                    <SearchCity
                        onCitySearch={onCitySearch}
                        onCityChange={onCityChange}
                    />
                    <CityPhoto
                        photo={photo}
                        recommendation={currentWeather.icon_recommend[1]}
                    />
                </div>
                <div className="weather__right">
                    <CurrentWeather currentWeather={currentWeather} />
                </div>
            </div>
            <div className="weather__footer">
                <ForecastWeather forecastWeather={forecastWeather} />
            </div>
        </div>
    )
}




