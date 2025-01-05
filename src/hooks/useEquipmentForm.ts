import { useForm } from "react-hook-form"
import { EquipmentDetailFormData } from "../api/types"
import { useShowSnackbarMessageOnInvalidFormSubmit } from "./useShowSnackbarMessageOnInvalidFormSubmit"

export function useEquipmentForm(
  onValid: (data: EquipmentDetailFormData) => Promise<void>
) {
  const { showSnackbarMessageOnInvalid } =
    useShowSnackbarMessageOnInvalidFormSubmit()

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<EquipmentDetailFormData>()

  const onSubmit = handleSubmit(onValid, showSnackbarMessageOnInvalid)

  return {
    register,
    onSubmit,
    errors,
    clearErrors,
    setValue,
  }
}
