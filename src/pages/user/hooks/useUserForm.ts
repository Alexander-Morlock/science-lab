import { useForm } from "react-hook-form"
import { UserFormData } from "../../../api/types"
import { useShowSnackbarMessageOnInvalidFormSubmit } from "../../../hooks/useShowSnackbarMessageOnInvalidFormSubmit"

export function useUserForm(onValid: (data: UserFormData) => Promise<void>) {
  const { showSnackbarMessageOnInvalid } =
    useShowSnackbarMessageOnInvalidFormSubmit()

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<UserFormData>()

  const onSubmit = handleSubmit(onValid, showSnackbarMessageOnInvalid)

  return {
    register,
    onSubmit,
    errors,
    clearErrors,
    setValue,
  }
}
