import React, {
  useState,
  PropsWithChildren,
  useEffect,
  useCallback,
} from "react"
import { SnackbarContext } from "../context/snackbarContext"

type SnackBar = {
  message: string
  milliseconds?: number
}

const DEFAULT_TIME_DURATION_MS = 2000

export function SnackbarContextProvider({ children }: PropsWithChildren) {
  const [snackbar, setSnackbar] = useState<SnackBar>()

  const showMessage = useCallback(
    (message: string, milliseconds = DEFAULT_TIME_DURATION_MS) => {
      setSnackbar({ message, milliseconds })
    },
    []
  )

  useEffect(() => {
    if (!snackbar) {
      return
    }

    setTimeout(() => {
      setSnackbar(undefined)
    }, snackbar.milliseconds)
  }, [snackbar])

  return (
    <SnackbarContext.Provider
      value={{ message: snackbar?.message, showMessage }}
    >
      {children}
    </SnackbarContext.Provider>
  )
}
