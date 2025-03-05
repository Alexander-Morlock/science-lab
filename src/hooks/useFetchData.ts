/* eslint-disable no-redeclare */
import { useCallback, useEffect, useState } from "react"
import { useSnackbar } from "./useSnackbar"
import { SnackbarMessageType } from "../utils/types"
import { AxiosError } from "axios"

type useFetchDataOptions<TResponse> = {
  onSuccess?: (response: TResponse | undefined) => void
  onError?: (error: unknown) => void
  autofetch?: boolean
}

type UseFetchDataOutput<TResponse, TFetch> = {
  fetch: TFetch
  isLoading: boolean
  data?: TResponse
}

/** Lightweight version of useQuery-like hook, no caching */
export function useFetchData<TResponse>(
  apiCallFn: (params?: undefined) => Promise<TResponse | undefined>,
  options?: useFetchDataOptions<TResponse>
): UseFetchDataOutput<
  TResponse,
  (params?: undefined) => Promise<TResponse | undefined>
>
export function useFetchData<TResponse, TParams>(
  apiCallFn: (params: TParams) => Promise<TResponse | undefined>,
  options?: useFetchDataOptions<TResponse>
): UseFetchDataOutput<
  TResponse,
  (params: TParams) => Promise<TResponse | undefined>
>
export function useFetchData<TResponse, TParams>(
  apiCallFn: (params?: TParams) => Promise<TResponse | undefined>,
  options?: useFetchDataOptions<TResponse>
) {
  const [isLoading, setIsLoading] = useState(false)
  const [isFetched, setIsFetched] = useState(false)
  const [data, setData] = useState<TResponse | undefined>()

  const { showSnackbar } = useSnackbar()

  const handleXhrError = useCallback(
    (error: AxiosError) => {
      options?.onError?.(error)
      setIsLoading(false)
      setIsFetched(true)

      const statusText = error.response?.statusText
      const snackBarErrorMessage = statusText
        ? `${error.message}: ${statusText}`
        : "Unknown API error"

      showSnackbar({
        message: snackBarErrorMessage,
        type: SnackbarMessageType.ERROR,
      })
    },
    [options, showSnackbar]
  )

  const fetch = useCallback(
    (params: TParams) => {
      setData(undefined)
      setIsFetched(false)
      setIsLoading(true)

      return apiCallFn(params)
        .then((data) => {
          setData(data)
          setIsFetched(true)
          options?.onSuccess?.(data)
          return data
        })
        .catch((e) => {
          handleXhrError(e)
          return e
        })
        .finally(() => setIsLoading(false))
    },
    [apiCallFn, handleXhrError, options]
  )

  useEffect(() => {
    if (options?.autofetch !== true || isLoading || data || isFetched) {
      return
    }

    fetch(undefined as TParams)
  }, [data, fetch, isFetched, isLoading, options?.autofetch])

  return { data, isLoading, fetch }
}
