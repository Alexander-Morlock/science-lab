import { apiClient } from "../api/apiClient"
import { useFetchData } from "./useFetchData"

export function useGetExperimentDetailsData(id?: number | string) {
  return useFetchData(() => apiClient.experiments.get(Number(id)), {
    autofetch: true,
  })
}
