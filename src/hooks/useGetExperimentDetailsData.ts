import { apiClient } from "../api/apiClient"
import { useFetchData } from "./useFetchData"

export function useGetExperimentDetailsData(id?: number | string) {
  const { data, isLoading } = useFetchData(
    () => apiClient.experiments.get(Number(id)),
    { autofetch: true }
  )

  return { data, isLoading }
}
