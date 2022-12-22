import { RefObject, useEffect } from 'react'
const EVENTS = ['mousedown', 'touchstart']
export type OnClickAwayFunc = (event: Event) => void

/**
 * Dismiss something after it loses focus
 * @param refs
 * @param onClickAway
 */
export const useClickAway = (
  refs: Array<RefObject<HTMLElement | null>>,
  onClickAway?: OnClickAwayFunc,
): void => {
  useEffect(() => {
    const handler = (event): void => {
      if (onClickAway) {
        const isClickAway = refs.every(ref => {
          const { current: el } = ref
          return el && !el.contains(event.target)
        })
        isClickAway && onClickAway(event)
      }
    }

    if (onClickAway) {
      for (const eventName of EVENTS) {
        document.addEventListener(eventName, handler)
      }
    }

    return (): void => {
      if (onClickAway) {
        for (const eventName of EVENTS) {
          document.removeEventListener(eventName, handler)
        }
      }
    }
  }, [onClickAway, refs])
}
