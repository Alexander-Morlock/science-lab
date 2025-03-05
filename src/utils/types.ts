import { UseQueryResult } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

export enum SnackbarMessageType {
  INFO = "INFO",
  ERROR = "ERROR",
}

export type SnackBarType = {
  message: string
  type?: SnackbarMessageType
  milliseconds?: number
}
