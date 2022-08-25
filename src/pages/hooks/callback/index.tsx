import React, { useState, useCallback } from 'react'
import { Lists } from '../../../components'

const CallbackPage = () => {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)

  /**
   * useCallback only recreates this func when number changes and prevents rerender
   * */
  /**
   * useMemo takes a func and it returns the return value of the func while
   * the useCallback returns and stores the actual function itself in a variable) and
   * allows to pass parameters
   **/
  const getItems = useCallback(
    incrementor => {
      return [
        number + incrementor,
        number + 1 + incrementor,
        number + 2 + incrementor,
      ]
    },
    [number],
  )

  const theme = {
    backgroundColor: dark ? '#333' : '#fff',
    color: dark ? '#fff' : '#333',
  }
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Toggle theme
      </button>
      <Lists getItems={getItems} />
    </div>
  )
}

export default CallbackPage
