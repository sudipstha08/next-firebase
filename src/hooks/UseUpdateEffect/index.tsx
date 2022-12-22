import { useEffect, useRef } from 'react'

function useUpdateEffect(effect: () => void, dependencyArray: Array<any> = []) {
  const isInitialMount = useRef(true)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      return effect()
    }
  }, dependencyArray)
}

export { useUpdateEffect }

// export const myComponent = props => {
//   const { value } = props

//   useUpdateEffect(() => {
//     alert(`Value has changed to: ${value}`)
//   }, [value])

//   return <span> {value} </span>
// }
