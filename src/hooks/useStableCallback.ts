import { useCallback, useEffect, useRef } from "react"

function throwReferenceError() {
  throw new ReferenceError(
    "Callback was called directly while rendering, pass it as a callback prop instead."
  )
}

export function useStableCallback<
  Tfunction extends ((...args: any[]) => unknown) | undefined
>(callback: Tfunction): Tfunction {
  const ref = useRef(throwReferenceError as Tfunction)

  useEffect(() => {
    ref.current = callback
  }, [callback])

  return useCallback(
    (...args: any[]) => {
      ref.current?.(...args)
    },
    [ref]
  ) as Tfunction
}
