import React, {
  useState,
  PropsWithChildren,
  useEffect,
  useCallback,
} from "react"
import { SnackbarContext } from "../context/snackbarContext"
import { SnackbarMessageType, SnackBarType } from "../utils/types"

const DEFAULT_TIME_DURATION_MS = 2000

export function SnackbarContextProvider({ children }: PropsWithChildren) {
  const [snackbar, setSnackbar] = useState<SnackBarType>()

  const showSnackbar = useCallback((props?: SnackBarType) => {
    if (props === undefined) {
      setSnackbar(props)
      return
    }

    const {
      message,
      milliseconds = DEFAULT_TIME_DURATION_MS,
      type = SnackbarMessageType.INFO,
    } = props

    setSnackbar({ message, milliseconds, type })
  }, [])

  useEffect(() => {
    if (!snackbar) {
      return
    }

    setTimeout(() => {
      setSnackbar(undefined)
    }, snackbar.milliseconds)
  }, [snackbar])

  return (
    <SnackbarContext.Provider value={{ snackbar, showSnackbar }}>
      {children}
    </SnackbarContext.Provider>
  )
}
