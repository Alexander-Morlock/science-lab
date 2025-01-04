import { apiClient } from "../api/apiClient"
import { useFetchData } from "./useFetchData"

export function useGetHomePageData() {
  const { data: users, isLoading: isLoadingUsers } = useFetchData(
    apiClient.user.getAll,
    { autofetch: true }
  )

  const { data: experiments, isLoading: isLoadingExperiments } = useFetchData(
    () => apiClient.experiments.getAll(),
    { autofetch: true }
  )

  return {
    users,
    experiments,
    isLoading: isLoadingUsers || isLoadingExperiments,
  }
}
