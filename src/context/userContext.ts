import { createContext } from "react"
import { User } from "../api/types"

type UserContextType = {
  user?: User
  setUser: (user: User) => void
}

export const defaultUserContext: UserContextType = {
  setUser: () => null,
}

export const UserContext = createContext<UserContextType | null>(null)
