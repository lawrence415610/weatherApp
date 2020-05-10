import React from 'react';
import { useSpring, animated } from 'react-spring'
import './CurrentWeather.css';



export default function CurrentWeather({ currentWeather }) {
  const animateProps = useSpring({ number: currentWeather.temperature, from: { number: currentWeather.temperature } })

  return (
    <div className="weathernow">
      <i className={'animated slideInRight weathernow__icon ' + currentWeather.icon_recommend[0]} />
      <br />

      <div className="weathernow__temp">
        <animated.span>{animateProps.number.interpolate(x => x.toFixed(1))}</animated.span>℃
      </div>

      <div className="weathernow__text">{currentWeather.icon_recommend[0].substr(6)}</div>
      <div className="weathernow__loc">
        {currentWeather.city}, {currentWeather.country}
      </div>
    </div>
  )
}
