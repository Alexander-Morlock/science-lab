import { useForm } from "react-hook-form"
import { apiClient } from "../api/apiClient"
import { ExperimentFormData } from "../api/types"
import { useFetchData } from "./useFetchData"
import { useShowSnackbarMessageOnInvalidFormSubmit } from "./useShowSnackbarMessageOnInvalidFormSubmit"

export function useExperimentForm(
  onValid: (data: ExperimentFormData) => Promise<void>
) {
  const { data: users, isLoading: isLoadingUsers } = useFetchData(
    apiClient.user.getAll,
    { autofetch: true }
  )

  const { data: areasOfExpertise, isLoading: isLoadingAreasOfExpertise } =
    useFetchData(apiClient.areasOfExpertise.getAll, { autofetch: true })

  const { data: equipment, isLoading: isLoadingEquipment } = useFetchData(
    apiClient.equipment.getAll,
    { autofetch: true }
  )

  const { showSnackbarMessageOnInvalid } =
    useShowSnackbarMessageOnInvalidFormSubmit()

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<ExperimentFormData>()

  const onSubmit = handleSubmit(onValid, showSnackbarMessageOnInvalid)

  return {
    onSubmit,
    register,
    setValue,
    clearErrors,
    errors,
    users,
    areasOfExpertise,
    equipment,
    isLoading:
      isLoadingUsers || isLoadingAreasOfExpertise || isLoadingEquipment,
  }
}
