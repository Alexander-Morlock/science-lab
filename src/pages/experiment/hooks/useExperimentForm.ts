import { useForm } from "react-hook-form"
import { apiClient } from "../../../api/apiClient"
import { ExperimentFormData } from "../../../api/types"
import { useShowSnackbarMessageOnInvalidFormSubmit } from "../../../hooks/useShowSnackbarMessageOnInvalidFormSubmit"
import { useQuery } from "@tanstack/react-query"

export function useExperimentForm(
  onValid: (data: ExperimentFormData) => Promise<void>
) {
  const { data: users, isLoading: isLoadingUsers } = useQuery({
    queryKey: ["user.getAll"],
    queryFn: apiClient.user.getAll,
  })

  const { data: areasOfExpertise, isLoading: isLoadingAreasOfExpertise } =
    useQuery({
      queryKey: ["areasOfExpertise.getAll"],
      queryFn: apiClient.areasOfExpertise.getAll,
    })

  const { data: equipment, isLoading: isLoadingEquipment } = useQuery({
    queryKey: ["equipment.getAll"],
    queryFn: apiClient.equipment.getAll,
  })

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
