import React from 'react'
import { WeatherResults } from '../WeatherResult'
import { useSnapshot } from 'valtio'
import { weatherStore } from '../../../store'

export const Cities = () => {
  const snapshot = useSnapshot(weatherStore)
  console.log('cities')
  return (
    <div className="cities">
      Cities
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridColumnGap: '1rem',
        }}
      >
        {snapshot.cities.map(city => (
          <WeatherResults
            name={city.name}
            key={city.name}
            weather={city.weather}
          />
        ))}
      </div>
      <div style={{ padding: 10, fontWeight: 500 }}>
        Average: {snapshot.getAverageTemerature()}
      </div>
    </div>
  )
}
