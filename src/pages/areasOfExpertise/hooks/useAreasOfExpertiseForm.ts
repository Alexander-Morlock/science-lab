import { useForm } from "react-hook-form"
import { AreaOfExpertiseFromData } from "../../../api/types"
import { useShowSnackbarMessageOnInvalidFormSubmit } from "../../../hooks/useShowSnackbarMessageOnInvalidFormSubmit"

export function useAreasOfExpertiseForm(
  onValid: (data: AreaOfExpertiseFromData) => Promise<void>
) {
  const { showSnackbarMessageOnInvalid } =
    useShowSnackbarMessageOnInvalidFormSubmit()

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<AreaOfExpertiseFromData>()

  const onSubmit = handleSubmit(onValid, showSnackbarMessageOnInvalid)

  return {
    register,
    onSubmit,
    errors,
    clearErrors,
    setValue,
  }
}
