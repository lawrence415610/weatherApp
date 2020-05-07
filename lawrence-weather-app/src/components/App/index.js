import React, { Component } from 'react';
import Weather from '../Weather';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

/* import {
    mockWeatherData,
    mockForecastData
} from '../__mock__/mock_data' */

import {
    WEATHER_API_URL,
    WEATHER_API_KEY,
    WEATHER,
    FORECAST,
    QUERY,
    UNITS_METRIC,
    APPID,
    PHOTO_API_URL,
    PHOTO_API_KEY
} from '../../constants'

import * as weatherIcons from "./icons.json";
import * as recommendations from "./recommendations.json"
import './weather-icons.min.css'
import './animate.css'

import './App.css'

function getIconAndRecommendation(id) {
    const prefix = "wi wi-";
    const icon = prefix + weatherIcons.default[id].icon;
    const recommendation = recommendations.default[id].recommendation
    return [icon, recommendation]
}

function mapCurrentWeatherData(data) {
    const mapped = {
        city: data.name,
        country: data.sys.country,
        date: data.dt * 1000,
        icon_recommend: getIconAndRecommendation(data.weather[0].id),
        temperature: data.main.temp,
        description: data.weather[0].description,
    }

    // remove undefined fields
    Object.keys(mapped).forEach(
        key => mapped[key] === undefined && delete data[key]
    );

    return mapped;
}

function mapForecastWeatherData(data) {
    const mapped = [];
    for (let i = 0, len = data.list.length; i < len; i += 8) {
        mapped.push({
            date: data.list[i + 4].dt * 1000,
            weather: getIconAndRecommendation(data.list[i + 4].weather[0].id)[0],
            temperature: data.list[i + 4].main.temp
        })
    }
    // remove undefined fields
    Object.keys(mapped).forEach(
        key => mapped[key] === undefined && delete data[key]
    );

    return mapped;
}

function handleResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Error: Location " + response.statusText);
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            city: "Sydney",
            currentWeather: {},
            forecastWeather: [],
            photo: ''
        }

        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleCitySearch = this.handleCitySearch.bind(this);

        this.fetchWeather = this.fetchWeather.bind(this);
        this.fetchForecast = this.fetchForecast.bind(this);
        this.fetchPhoto = this.fetchPhoto.bind(this);

    }

    // TODO: 0. promise请求和搜索和useEffect等不是很熟练，有些机制没有搞清楚
    // TODO: 4. 调整数据结构，实现客户端搜索词缓存
    // TODO: 5. 实现客户端搜索词在session storage页面内缓存


    fetchWeather(city) {
        return fetch(
            `${WEATHER_API_URL}/${WEATHER}?${QUERY}${city}&${UNITS_METRIC}&${APPID}${WEATHER_API_KEY}`
        )
            .then(res => handleResponse(res))
            .then(weather => {
                if (Object.entries(weather).length) {
                    return mapCurrentWeatherData(weather);
                }
            })
            .then(currentWeather => this.setState({ currentWeather }))
            .catch(e => e)
    }

    fetchForecast(city) {
        return fetch(
            `${WEATHER_API_URL}/${FORECAST}?${QUERY}${city}&${UNITS_METRIC}&${APPID}${WEATHER_API_KEY}`
        )
            .then(res => handleResponse(res))
            .then(weather => {
                if (Object.entries(weather).length) {
                    return mapForecastWeatherData(weather);
                }
            })
            .then(forecastWeather => this.setState({ forecastWeather }))
            .catch(e => e)
    }

    fetchPhoto(city) {
        return fetch(
            `${PHOTO_API_URL}/search/photos/?query=${city}&client_id=${PHOTO_API_KEY}`
        )
            .then(res => handleResponse(res))
            .then(photo => photo.results[0].urls.regular)
            .then(photo => this.setState({ photo }))
            .catch(e => e)
    }

    handleCityChange(e) {
        this.setState({
            city: e.target.value,
        })
    }

    handleCitySearch(e) {
        const { city } = this.state;
        this.fetchWeather(city);
        this.fetchForecast(city);
        this.fetchPhoto(city);
        e.preventDefault();
    }

    componentDidMount() {
        const { city } = this.state;
        this.fetchWeather(city);
        this.fetchForecast(city);
        this.fetchPhoto(city);
    }

    render() {
        const { currentWeather, forecastWeather, photo } = this.state;
        if (
            (currentWeather && Object.keys(currentWeather).length) ||
            (forecastWeather && Object.keys(forecastWeather).length)
        ) {
            return (
                <div className="app">
                    <Weather
                        photo={photo}
                        currentWeather={currentWeather}
                        forecastWeather={forecastWeather}
                        onCitySearch={this.handleCitySearch}
                        onCityChange={this.handleCityChange}
                    />
                </div>

            );
        } else {
            return <LoadingSpinner />
        }
    }
}

export default App;