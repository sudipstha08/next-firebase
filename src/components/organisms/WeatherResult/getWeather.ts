export interface WeatherResult {
  summary: {
    description: string
  }
  wind: {
    speed: number
    direction: string
  }
  temperature: {
    actual: number
    feelsLike: number
  }
}

const convertTemp = kelvin => ((kelvin - 273.15) * 9) / 5 + 32

const GQL = `
 query ($name: String!) {
   getCityByName(name: $name) {
     weather {
       wind {
         speed
         deg
       }
       temperature {
         actual
         feelsLike
       }
       summary {
         description
       }
     }
   }
 }`

export default name =>
  fetch('https://graphql-weather-api.herokuapp.com/', {
    headers: {
      accept: '*/*',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: GQL,
      variables: {
        name,
      },
    }),
    method: 'POST',
  })
    .then(resp => resp.json())
    .then(
      ({
        data: { getCityByName },
      }: {
        data: {
          getCityByName: {
            weather: WeatherResult
          }
        }
      }) => {
        if (!getCityByName) {
          return null
        }
        const weather = getCityByName.weather
        weather.temperature.actual = convertTemp(
          getCityByName.weather.temperature.actual,
        )
        weather.temperature.feelsLike = convertTemp(
          getCityByName.weather.temperature.feelsLike,
        )
        return weather
      },
    )
