import { useCallback } from "react"
import { FieldErrors, FieldValues } from "react-hook-form"
import { useSnackbar } from "./useSnackbar"
import { SnackbarMessageType } from "../utils/types"
import { getExperimentDetailFieldPlaceholder } from "../utils/utils"

export function useShowSnackbarMessageOnInvalidFormSubmit() {
  const { showSnackbar } = useSnackbar()

  const showSnackbarMessageOnInvalid = useCallback(
    <T extends FieldValues>(errors: FieldErrors<T>) => {
      showSnackbar({
        message: Object.entries(errors)
          .map(
            ([fieldName, error]) =>
              `${getExperimentDetailFieldPlaceholder(fieldName)}: ${
                error?.message || error?.type
              }`
          )
          .filter(Boolean)
          .join(", "),
        type: SnackbarMessageType.ERROR,
      })
    },
    [showSnackbar]
  )

  return { showSnackbarMessageOnInvalid }
}
