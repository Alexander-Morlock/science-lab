import { createContext } from "react"
import { SnackBarType } from "../utils/types"

type SnackbarContextType = {
  snackbar?: SnackBarType
  showSnackbar: (snackbar?: SnackBarType) => void
}

export const defaultUserContext: SnackbarContextType = {
  showSnackbar: () => null,
}

export const SnackbarContext = createContext<SnackbarContextType | null>(null)
