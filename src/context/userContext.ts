import { createContext } from "react"
import { UserInfo } from "../utils/types"

type UserContextType = {
  userInfo: UserInfo
  setUserInfo: (info: UserInfo) => void
}

export const defaultUserContext: UserContextType = {
  userInfo: { isLoggedIn: false },
  setUserInfo: () => null,
}

export const UserContext = createContext<UserContextType | null>(null)
