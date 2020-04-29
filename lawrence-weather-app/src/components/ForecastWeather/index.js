import React from 'react'
import './ForecastWeather.css';
import Forecast from '../Forecast'

export default function ForecastWeather({ forecastWeather }) {
    return (
        <div className="ForecastWeather">
            {forecastWeather.map(item =>
                <Forecast key={item.date} {...item} />
            )}
        </div>
    )
}
