import React from 'react';
import { useSpring, animated } from 'react-spring'
import './Forecast.css'

function convertTimetoWeekday(time) {
    let date = new Date(time);
    const options = { weekday: 'long' };
    date = Intl.DateTimeFormat('en-US', options).format(date);
    return date;
}

export default function Forecast({ date, weather, temperature }) {
    const { number, height } = useSpring({
        from: {
            number: temperature,
            height: 30,
            xyz: [0, 0, 0]
        },
        number: temperature,
        height: Math.abs((temperature / 30) * 60),
    })


    return (
        <div className="forecast">
            <animated.div style={{ height: height }}>
            </animated.div>
            <div className="forecast__temp">
                <animated.span>{number.interpolate(x => x.toFixed(2))}</animated.span>℃
            </div>

            <div className="forecast__weekday">
                {convertTimetoWeekday(date)}
            </div>

            <div
                className="forecast__icon"
            >
                <i className={weather + " forecast__icon"} />
            </div>
        </div>
    )
}
