import { createContext } from "react"
import { UserRole } from "../api/types"

type User = { role: UserRole }

type UserContextType = {
  user?: User
  setUser: (user?: User) => void
}

export const defaultUserContext: UserContextType = {
  setUser: () => null,
}

export const UserContext = createContext<UserContextType | null>(null)
