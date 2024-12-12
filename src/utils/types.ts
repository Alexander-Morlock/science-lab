export enum UserRights {
  VISITOR = "VISITOR",
  SCIENTIST = "SCIENTIST",
}

export type UserInfo = {
  isLoggedIn: boolean
  rights?: UserRights
}
