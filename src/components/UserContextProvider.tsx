import React, { useState, PropsWithChildren } from "react"
import { UserContext } from "../context/userContext"
import { UserRole } from "../api/types"

export function UserContextProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<{ role: UserRole } | undefined>()

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
