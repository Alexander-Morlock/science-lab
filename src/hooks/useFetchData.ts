import { useCallback, useEffect, useState } from "react"
import { useSnackbar } from "./useSnackbar"
import { SnackbarMessageType } from "../utils/types"
import { AxiosResponse } from "axios"

export function useFetchData<T, A>(
  apiCallFn: (...args: A[]) => Promise<AxiosResponse<T | undefined>>,
  options?: {
    onSuccess?: (response: T | undefined) => void
    onError?: (error: unknown) => void
    autofetch?: boolean
  }
): {
  fetch: (...args: A[]) => Promise<T | undefined>
  isLoading: boolean
  data?: T
} {
  const [isLoading, setIsLoading] = useState(false)
  const [isFetched, setIsFetched] = useState(false)
  const [data, setData] = useState<T | undefined>()

  const { showSnackbar } = useSnackbar()

  const handleXhrError = useCallback(
    (error: unknown) => {
      options?.onError?.(error)
      setIsLoading(false)
      setIsFetched(true)
      showSnackbar({
        message: "Unknown API error",
        type: SnackbarMessageType.ERROR,
      })
    },
    [options, showSnackbar]
  )

  const fetch = useCallback(
    (...args: A[]) => {
      setData(undefined)
      setIsFetched(false)
      setIsLoading(true)

      return apiCallFn(...args)
        .then((response) => {
          setData(response.data)
          setIsFetched(true)
          options?.onSuccess?.(response.data)
          return response.data
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

    fetch()
  }, [data, fetch, isFetched, isLoading, options?.autofetch])

  return { data, isLoading, fetch }
}
