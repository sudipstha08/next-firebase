import React from 'react'
import { WeatherResult } from './getWeather'

interface IProp {
  name: string
  weather: WeatherResult
}

export const WeatherResults = ({ name, weather }: IProp) => (
  <div style={{ border: '1px solid black', width: '100%', padding: 10 }}>
    <div style={{ fontWeight: 500, fontSize: 20 }}>{name}</div>
    <div>{weather.wind.speed} MPH</div>
    <div>{weather.temperature.actual} F</div>
    <div>{weather.temperature.feelsLike} F</div>
    <div>{weather.summary.description}</div>
  </div>
)
