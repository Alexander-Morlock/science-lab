import { useState } from "react"
import { useForm } from "react-hook-form"
import { useParams } from "react-router"
import { apiClient } from "../api/apiClient"
import { Experiment } from "../api/types"
import { useFetchData } from "./useFetchData"
import { useShowSnackbarMessageOnInvalidFormSubmit } from "./useShowSnackbarMessageOnInvalidFormSubmit"

export function useExperimentForm(
  onValid: (data: Experiment) => Promise<void>
) {
  const { id } = useParams()

  const [isInitialized, setIsInitialized] = useState(false)

  const { data: experiment, isLoading: isLoadingExperiment } = useFetchData(
    () => apiClient.experiments.get(Number(id)),
    { autofetch: true }
  )

  const { data: users, isLoading: isLoadingUsers } = useFetchData(
    apiClient.user.getAll,
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
  } = useForm<Experiment>()

  const onSubmit = handleSubmit(onValid, showSnackbarMessageOnInvalid)

  return {
    onSubmit,
    register,
    setValue,
    errors,
    experiment,
    isLoading: isLoadingExperiment || isLoadingUsers,
    isInitialized,
    setIsInitialized,
    clearErrors,
    users,
  }
}
