export enum SnackbarMessageType {
  INFO = "INFO",
  ERROR = "ERROR",
}

export type SnackBarType = {
  message: string
  type?: SnackbarMessageType
  milliseconds?: number
}
