import { useContext } from "react"
import { UserContext } from "../context/userContext"

export function useUserInfo() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error(
      "useUserInfo() must be used inside the UserContextProvider!"
    )
  }

  return context
}
