/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'

const Lists = ({ getItems }) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(getItems(5))
    console.log('Updating items')
  }, [getItems])

  return (
    <>
      {items.map(item => {
        return <div key={item}>{item}</div>
      })}
    </>
  )
}

export { Lists }
