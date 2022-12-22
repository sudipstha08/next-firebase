/* eslint-disable no-irregular-whitespace */
/**
 * This hook is very simple and similar to useState, with one main exception:
 * its value can only be boolean. In other words, this is the same as useState,
 * but it only works with boolean values ​​and is a little easier to use because
 * to change the state you just need to call the callback without passing the value
 * which we want to change, when the callback is called, it will change to the opposite.
 */

import { useCallback, useState } from 'react'

export const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue)
  const toggle = useCallback(() => {
    setValue((v: boolean) => !v)
  }, [])

  return [value, toggle] as [boolean, () => void]
}
