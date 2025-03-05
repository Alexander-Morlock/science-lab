import { useQuery } from "@tanstack/react-query"
import { apiClient } from "../../../api/apiClient"

export function useGetExperimentDetailsData(id?: number) {
  return useQuery({
    queryKey: ["experiments.get", id],
    queryFn: () => apiClient.experiments.get(Number(id)),
    enabled: id !== undefined,
  })
}
