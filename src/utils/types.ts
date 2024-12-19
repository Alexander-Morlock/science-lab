export enum UserRights {
  VISITOR = "VISITOR",
  SCIENTIST = "SCIENTIST",
}

export type UserInfo = {
  isLoggedIn: boolean
  rights?: UserRights
}

export enum SnackbarMessageType {
  INFO = "INFO",
  ERROR = "ERROR",
}

export type SnackBarType = {
  message: string
  type?: SnackbarMessageType
  milliseconds?: number
}
