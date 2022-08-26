import React from 'react'
import { useSnapshot } from 'valtio'
import { addCity, weatherStore } from '../../../store'

export const Search = () => {
  const snapshot = useSnapshot(weatherStore)
  console.log('Hello search')
  return (
    <div className="search">
      <div>
        <input
          placeholder="City"
          value={snapshot.city}
          onChange={e => (weatherStore.city = e.target.value)}
        />
      </div>
      <div>
        <button onClick={addCity}>Add City</button>
      </div>
    </div>
  )
}
