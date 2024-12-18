import { createContext } from "react"

type SnackbarContextType = {
  message?: string
  showMessage: (message: string, milliseconds?: number) => void
}

export const defaultUserContext: SnackbarContextType = {
  showMessage: () => null,
}

export const SnackbarContext = createContext<SnackbarContextType | null>(null)
