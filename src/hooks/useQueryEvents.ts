import { UseQueryResult } from "@tanstack/react-query"
import { useStableCallback } from "./useStableCallback"
import { useEffect } from "react"

type Callbacks<TResponse, TError> = {
  onSuccess?: (data?: TResponse) => void
  onError?: (error: TError) => void
}

export function useQueryEvents<TResponse, TError>(
  query: UseQueryResult<TResponse, TError>,
  callbacks: Callbacks<TResponse, TError>
) {
  const onSuccess = useStableCallback(callbacks.onSuccess)
  const onError = useStableCallback(callbacks.onError)

  useEffect(() => {
    if (query.data) {
      onSuccess?.(query.data)
    }
  }, [onSuccess, query.data])

  useEffect(() => {
    if (query.error) {
      onError?.(query.error)
    }
  }, [onError, query.error])
}
