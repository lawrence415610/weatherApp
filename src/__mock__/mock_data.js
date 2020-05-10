
// const api = 571cefa04e8dca4c26d4e7759d7e59ac

// http://api.openweathermap.org/data/2.5/weather?q=Sydney&units=metric&appid=571cefa04e8dca4c26d4e7759d7e59ac
export const mockWeatherData = {
  "coord": {
      "lon": 151.21,
      "lat": -33.87
  },
  "weather": [
      {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
      }
  ],
  "base": "stations",
  "main": {
      "temp": 19.17,
      "feels_like": 20.41,
      "temp_min": 17.78,
      "temp_max": 20.56,
      "pressure": 1015,
      "humidity": 76
  },
  "wind": {
      "speed": 0.45,
      "deg": 259,
      "gust": 0.89
  },
  "rain": {
      "3h": 0.18
  },
  "clouds": {
      "all": 76
  },
  "dt": 1587972508,
  "sys": {
      "type": 3,
      "id": 2018875,
      "country": "AU",
      "sunrise": 1587932796,
      "sunset": 1587971924
  },
  "timezone": 36000,
  "id": 2147714,
  "name": "Sydney",
  "cod": 200
}

//http://api.openweathermap.org/data/2.5/forecast?q=Sydney&units=metric&appid=571cefa04e8dca4c26d4e7759d7e59ac
export const mockForecastData = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
      {
          "dt": 1587978000,
          "main": {
              "temp": 17.78,
              "feels_like": 16.63,
              "temp_min": 17.78,
              "temp_max": 18.06,
              "pressure": 1025,
              "sea_level": 1024,
              "grnd_level": 1016,
              "humidity": 79,
              "temp_kf": -0.28
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 49
          },
          "wind": {
              "speed": 3.49,
              "deg": 68
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2020-04-27 09:00:00"
      },
      {
          "dt": 1587988800,
          "main": {
              "temp": 18.28,
              "feels_like": 17.01,
              "temp_min": 18.28,
              "temp_max": 18.4,
              "pressure": 1025,
              "sea_level": 1025,
              "grnd_level": 1017,
              "humidity": 80,
              "temp_kf": -0.12
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 63
          },
          "wind": {
              "speed": 4,
              "deg": 61
          },
          "rain": {
              "3h": 0.39
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2020-04-27 12:00:00"
      },
      {
          "dt": 1587999600,
          "main": {
              "temp": 17.77,
              "feels_like": 16.71,
              "temp_min": 17.77,
              "temp_max": 17.81,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1016,
              "humidity": 83,
              "temp_kf": -0.04
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 53
          },
          "wind": {
              "speed": 3.74,
              "deg": 53
          },
          "rain": {
              "3h": 0.52
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2020-04-27 15:00:00"
      },
      {
          "dt": 1588010400,
          "main": {
              "temp": 17.7,
              "feels_like": 16.74,
              "temp_min": 17.7,
              "temp_max": 17.7,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1016,
              "humidity": 84,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 53
          },
          "wind": {
              "speed": 3.66,
              "deg": 37
          },
          "rain": {
              "3h": 0.45
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2020-04-27 18:00:00"
      },
      {
          "dt": 1588021200,
          "main": {
              "temp": 17.59,
              "feels_like": 16.77,
              "temp_min": 17.59,
              "temp_max": 17.59,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1016,
              "humidity": 84,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 26
          },
          "wind": {
              "speed": 3.4,
              "deg": 33
          },
          "rain": {
              "3h": 0.27
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2020-04-27 21:00:00"
      },
      {
          "dt": 1588032000,
          "main": {
              "temp": 20.64,
              "feels_like": 18.91,
              "temp_min": 20.64,
              "temp_max": 20.64,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1016,
              "humidity": 73,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 32
          },
          "wind": {
              "speed": 5.1,
              "deg": 31
          },
          "rain": {
              "3h": 0.44
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2020-04-28 00:00:00"
      },
      {
          "dt": 1588042800,
          "main": {
              "temp": 21.22,
              "feels_like": 19.45,
              "temp_min": 21.22,
              "temp_max": 21.22,
              "pressure": 1021,
              "sea_level": 1021,
              "grnd_level": 1013,
              "humidity": 71,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 50
          },
          "wind": {
              "speed": 5.23,
              "deg": 31
          },
          "rain": {
              "3h": 0.63
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2020-04-28 03:00:00"
      },
      {
          "dt": 1588053600,
          "main": {
              "temp": 21.18,
              "feels_like": 19.77,
              "temp_min": 21.18,
              "temp_max": 21.18,
              "pressure": 1020,
              "sea_level": 1020,
              "grnd_level": 1012,
              "humidity": 75,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 51
          },
          "wind": {
              "speed": 5.17,
              "deg": 37
          },
          "rain": {
              "3h": 0.33
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2020-04-28 06:00:00"
      },
      {
          "dt": 1588064400,
          "main": {
              "temp": 19.61,
              "feels_like": 18.67,
              "temp_min": 19.61,
              "temp_max": 19.61,
              "pressure": 1021,
              "sea_level": 1021,
              "grnd_level": 1013,
              "humidity": 84,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 87
          },
          "wind": {
              "speed": 4.65,
              "deg": 36
          },
          "rain": {
              "3h": 0.14
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2020-04-28 09:00:00"
      },
      {
          "dt": 1588075200,
          "main": {
              "temp": 19.05,
              "feels_like": 18.55,
              "temp_min": 19.05,
              "temp_max": 19.05,
              "pressure": 1020,
              "sea_level": 1020,
              "grnd_level": 1012,
              "humidity": 87,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 60
          },
          "wind": {
              "speed": 4.02,
              "deg": 13
          },
          "rain": {
              "3h": 1.29
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2020-04-28 12:00:00"
      },
      {
          "dt": 1588086000,
          "main": {
              "temp": 18.44,
              "feels_like": 17.98,
              "temp_min": 18.44,
              "temp_max": 18.44,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 1011,
              "humidity": 87,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 96
          },
          "wind": {
              "speed": 3.63,
              "deg": 352
          },
          "rain": {
              "3h": 0.19
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2020-04-28 15:00:00"
      },
      {
          "dt": 1588096800,
          "main": {
              "temp": 17.57,
              "feels_like": 17.5,
              "temp_min": 17.57,
              "temp_max": 17.57,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1009,
              "humidity": 89,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 93
          },
          "wind": {
              "speed": 2.79,
              "deg": 346
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2020-04-28 18:00:00"
      },
      {
          "dt": 1588107600,
          "main": {
              "temp": 17.3,
              "feels_like": 16.39,
              "temp_min": 17.3,
              "temp_max": 17.3,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 1008,
              "humidity": 87,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 57
          },
          "wind": {
              "speed": 3.67,
              "deg": 354
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2020-04-28 21:00:00"
      },
      {
          "dt": 1588118400,
          "main": {
              "temp": 21.11,
              "feels_like": 18.81,
              "temp_min": 21.11,
              "temp_max": 21.11,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 1008,
              "humidity": 70,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 71
          },
          "wind": {
              "speed": 5.81,
              "deg": 358
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2020-04-29 00:00:00"
      },
      {
          "dt": 1588129200,
          "main": {
              "temp": 21.51,
              "feels_like": 21.17,
              "temp_min": 21.51,
              "temp_max": 21.51,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 1006,
              "humidity": 68,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 2.97,
              "deg": 345
          },
          "rain": {
              "3h": 0.13
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2020-04-29 03:00:00"
      },
      {
          "dt": 1588140000,
          "main": {
              "temp": 19.67,
              "feels_like": 18.66,
              "temp_min": 19.67,
              "temp_max": 19.67,
              "pressure": 1013,
              "sea_level": 1013,
              "grnd_level": 1005,
              "humidity": 77,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 4.03,
              "deg": 306
          },
          "rain": {
              "3h": 1.15
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2020-04-29 06:00:00"
      },
      {
          "dt": 1588150800,
          "main": {
              "temp": 18.88,
              "feels_like": 18.47,
              "temp_min": 18.88,
              "temp_max": 18.88,
              "pressure": 1013,
              "sea_level": 1013,
              "grnd_level": 1006,
              "humidity": 84,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 3.49,
              "deg": 323
          },
          "rain": {
              "3h": 1.48
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2020-04-29 09:00:00"
      },
      {
          "dt": 1588161600,
          "main": {
              "temp": 18.73,
              "feels_like": 19.37,
              "temp_min": 18.73,
              "temp_max": 18.73,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 1004,
              "humidity": 86,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 2.11,
              "deg": 22
          },
          "rain": {
              "3h": 2.03
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2020-04-29 12:00:00"
      },
      {
          "dt": 1588172400,
          "main": {
              "temp": 19.2,
              "feels_like": 18.37,
              "temp_min": 19.2,
              "temp_max": 19.2,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 1001,
              "humidity": 85,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 99
          },
          "wind": {
              "speed": 4.37,
              "deg": 8
          },
          "rain": {
              "3h": 0.55
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2020-04-29 15:00:00"
      },
      {
          "dt": 1588183200,
          "main": {
              "temp": 19.34,
              "feels_like": 17.03,
              "temp_min": 19.34,
              "temp_max": 19.34,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 998,
              "humidity": 79,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 93
          },
          "wind": {
              "speed": 5.93,
              "deg": 12
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2020-04-29 18:00:00"
      },
      {
          "dt": 1588194000,
          "main": {
              "temp": 19.38,
              "feels_like": 16.59,
              "temp_min": 19.38,
              "temp_max": 19.38,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 998,
              "humidity": 75,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 78
          },
          "wind": {
              "speed": 6.21,
              "deg": 3
          },
          "rain": {
              "3h": 0.54
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2020-04-29 21:00:00"
      },
      {
          "dt": 1588204800,
          "main": {
              "temp": 17.49,
              "feels_like": 17.24,
              "temp_min": 17.49,
              "temp_max": 17.49,
              "pressure": 1005,
              "sea_level": 1005,
              "grnd_level": 998,
              "humidity": 77,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 86
          },
          "wind": {
              "speed": 1.88,
              "deg": 268
          },
          "rain": {
              "3h": 2.13
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2020-04-30 00:00:00"
      },
      {
          "dt": 1588215600,
          "main": {
              "temp": 12.25,
              "feels_like": 7.02,
              "temp_min": 12.25,
              "temp_max": 12.25,
              "pressure": 1004,
              "sea_level": 1004,
              "grnd_level": 996,
              "humidity": 88,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 501,
                  "main": "Rain",
                  "description": "moderate rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 7.66,
              "deg": 241
          },
          "rain": {
              "3h": 8.64
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2020-04-30 03:00:00"
      },
      {
          "dt": 1588226400,
          "main": {
              "temp": 12.21,
              "feels_like": 7.19,
              "temp_min": 12.21,
              "temp_max": 12.21,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 998,
              "humidity": 79,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 501,
                  "main": "Rain",
                  "description": "moderate rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 6.75,
              "deg": 289
          },
          "rain": {
              "3h": 6.91
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2020-04-30 06:00:00"
      },
      {
          "dt": 1588237200,
          "main": {
              "temp": 11.54,
              "feels_like": 6.04,
              "temp_min": 11.54,
              "temp_max": 11.54,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 999,
              "humidity": 73,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 89
          },
          "wind": {
              "speed": 6.82,
              "deg": 293
          },
          "rain": {
              "3h": 1.46
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2020-04-30 09:00:00"
      },
      {
          "dt": 1588248000,
          "main": {
              "temp": 11.56,
              "feels_like": 4.88,
              "temp_min": 11.56,
              "temp_max": 11.56,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 1000,
              "humidity": 70,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 48
          },
          "wind": {
              "speed": 8.32,
              "deg": 285
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2020-04-30 12:00:00"
      },
      {
          "dt": 1588258800,
          "main": {
              "temp": 11.08,
              "feels_like": 5.5,
              "temp_min": 11.08,
              "temp_max": 11.08,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 1000,
              "humidity": 66,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 6.36,
              "deg": 275
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2020-04-30 15:00:00"
      },
      {
          "dt": 1588269600,
          "main": {
              "temp": 10.2,
              "feels_like": 5.03,
              "temp_min": 10.2,
              "temp_max": 10.2,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 1000,
              "humidity": 65,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 5.48,
              "deg": 277
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2020-04-30 18:00:00"
      },
      {
          "dt": 1588280400,
          "main": {
              "temp": 10.18,
              "feels_like": 4.87,
              "temp_min": 10.18,
              "temp_max": 10.18,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 1002,
              "humidity": 61,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 5.44,
              "deg": 286
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2020-04-30 21:00:00"
      },
      {
          "dt": 1588291200,
          "main": {
              "temp": 12.76,
              "feels_like": 5.27,
              "temp_min": 12.76,
              "temp_max": 12.76,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 1003,
              "humidity": 50,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 10
          },
          "wind": {
              "speed": 8.45,
              "deg": 276
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2020-05-01 00:00:00"
      },
      {
          "dt": 1588302000,
          "main": {
              "temp": 13.5,
              "feels_like": 4.53,
              "temp_min": 13.5,
              "temp_max": 13.5,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 1002,
              "humidity": 47,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 71
          },
          "wind": {
              "speed": 10.52,
              "deg": 270
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2020-05-01 03:00:00"
      },
      {
          "dt": 1588312800,
          "main": {
              "temp": 13.27,
              "feels_like": 5.4,
              "temp_min": 13.27,
              "temp_max": 13.27,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 1001,
              "humidity": 48,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 67
          },
          "wind": {
              "speed": 8.97,
              "deg": 271
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2020-05-01 06:00:00"
      },
      {
          "dt": 1588323600,
          "main": {
              "temp": 10.92,
              "feels_like": 4.22,
              "temp_min": 10.92,
              "temp_max": 10.92,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 1004,
              "humidity": 57,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 7.36,
              "deg": 279
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2020-05-01 09:00:00"
      },
      {
          "dt": 1588334400,
          "main": {
              "temp": 10.55,
              "feels_like": 4.98,
              "temp_min": 10.55,
              "temp_max": 10.55,
              "pressure": 1013,
              "sea_level": 1013,
              "grnd_level": 1004,
              "humidity": 58,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 4
          },
          "wind": {
              "speed": 5.72,
              "deg": 282
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2020-05-01 12:00:00"
      },
      {
          "dt": 1588345200,
          "main": {
              "temp": 10.61,
              "feels_like": 4.48,
              "temp_min": 10.61,
              "temp_max": 10.61,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 1004,
              "humidity": 63,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02n"
              }
          ],
          "clouds": {
              "all": 18
          },
          "wind": {
              "speed": 6.83,
              "deg": 281
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2020-05-01 15:00:00"
      },
      {
          "dt": 1588356000,
          "main": {
              "temp": 10.19,
              "feels_like": 4.88,
              "temp_min": 10.19,
              "temp_max": 10.19,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 1004,
              "humidity": 65,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02n"
              }
          ],
          "clouds": {
              "all": 12
          },
          "wind": {
              "speed": 5.67,
              "deg": 268
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2020-05-01 18:00:00"
      },
      {
          "dt": 1588366800,
          "main": {
              "temp": 9.95,
              "feels_like": 3.88,
              "temp_min": 9.95,
              "temp_max": 9.95,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1006,
              "humidity": 64,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 6.65,
              "deg": 247
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2020-05-01 21:00:00"
      },
      {
          "dt": 1588377600,
          "main": {
              "temp": 13.31,
              "feels_like": 7.61,
              "temp_min": 13.31,
              "temp_max": 13.31,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 1008,
              "humidity": 51,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 6.09,
              "deg": 255
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2020-05-02 00:00:00"
      },
      {
          "dt": 1588388400,
          "main": {
              "temp": 16.33,
              "feels_like": 10.78,
              "temp_min": 16.33,
              "temp_max": 16.33,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 1006,
              "humidity": 41,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 5.8,
              "deg": 252
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2020-05-02 03:00:00"
      },
      {
          "dt": 1588399200,
          "main": {
              "temp": 16.49,
              "feels_like": 10.49,
              "temp_min": 16.49,
              "temp_max": 16.49,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 1006,
              "humidity": 42,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 6.57,
              "deg": 251
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2020-05-02 06:00:00"
      }
  ],
  "city": {
      "id": 2147714,
      "name": "Sydney",
      "coord": {
          "lat": -33.8679,
          "lon": 151.2073
      },
      "country": "AU",
      "population": 1000000,
      "timezone": 36000,
      "sunrise": 1587932796,
      "sunset": 1587971925
  }
}