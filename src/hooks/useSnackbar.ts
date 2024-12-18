import { useContext } from "react"
import { SnackbarContext } from "../context/snackbarContext"

export function useSnackbar() {
  const context = useContext(SnackbarContext)
  if (!context) {
    throw new Error(
      "useSnackbar() must be used inside the SnackbarContextProvider!"
    )
  }

  return context
}
