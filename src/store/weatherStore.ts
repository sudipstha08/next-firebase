/* eslint-disable no-console */
import { proxy, subscribe } from 'valtio'
import getWeather, {
  WeatherResult,
} from '../components/organisms/WeatherResult/getWeather'

interface ICityWeather {
  name: string
  weather: WeatherResult
}

interface IWeather {
  city: string
  cities: ICityWeather[]
  getAverageTemerature: () => number
}

export const weatherStore = proxy<IWeather>({
  city: '',
  cities: [],
  getAverageTemerature: () =>
    weatherStore.cities.reduce((a, v) => a + v.weather.temperature.actual, 0) /
    weatherStore.cities.length,
})

export const addCity = async () => {
  const weather = await getWeather(weatherStore.city)
  if (weather) {
    weatherStore.cities.push({
      name: weatherStore.city,
      weather,
    })
    // weatherStore.city = ''
  }
}

// Subscribe to all state changes
const unsubscribe = subscribe(weatherStore, () =>
  console.log('WeatherStore state has changed to', weatherStore),
)

// Unsubscribe by calling the result
// unsubscribe()
