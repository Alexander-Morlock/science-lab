import { useCallback, useEffect, useState } from "react"
import { useSnackbar } from "./useSnackbar"
import { SnackbarMessageType } from "../utils/types"
import { AxiosResponse } from "axios"

export function useFetchData<T>(
  apiCallFn: () => Promise<AxiosResponse<T | undefined>>,
  options?: {
    onSuccess?: (response: T | undefined) => void
    onError?: (error: unknown) => void
    enable?: boolean
  }
) {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<T | undefined>()

  const { showSnackbar } = useSnackbar()

  const handleXhrError = useCallback(
    (error: unknown) => {
      options?.onError?.(error)
      setIsLoading(false)
      showSnackbar({
        message: "XHR ERROR OCCURED",
        type: SnackbarMessageType.ERROR,
      })
    },
    [options, showSnackbar]
  )

  const fetch = useCallback(
    () =>
      apiCallFn()
        .then((response) => {
          setData(response.data)
          options?.onSuccess?.(response.data)
        })
        .catch(handleXhrError)
        .finally(() => setIsLoading(false)),
    [apiCallFn, handleXhrError, options]
  )

  const refetch = useCallback(() => {
    setData(undefined)
    fetch()
  }, [fetch])

  useEffect(() => {
    if (options?.enable === false || isLoading || data) {
      return
    }

    try {
      setIsLoading(true)
      fetch()
    } catch (error) {
      handleXhrError(error)
    }
  }, [apiCallFn, data, handleXhrError, isLoading, options, fetch])

  return { data, isLoading, refetch }
}
