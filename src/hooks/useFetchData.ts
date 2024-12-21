import { useCallback, useEffect, useState } from "react"
import { useSnackbar } from "./useSnackbar"
import { SnackbarMessageType } from "../utils/types"

export function useFetchData<T>(
  apiCallFn: () => Promise<T | undefined>,
  options?: {
    onSuccess?: (response: T | undefined) => void
    onError: (error: unknown) => void
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

  useEffect(() => {
    try {
      setIsLoading(true)

      apiCallFn()
        .then((response) => {
          setData(response)
          options?.onSuccess?.(response)
        })
        .catch(handleXhrError)
        .finally(() => setIsLoading(false))
    } catch (error) {
      handleXhrError(error)
    }
  }, [apiCallFn, handleXhrError, options])

  return { data, isLoading }
}
