import React, { useState, PropsWithChildren } from "react"
import { UserContext } from "../../context/userContext"
import { User } from "../../api/types"

export function UserContextProvider({ children }: PropsWithChildren<{}>) {
  const [user, setUser] = useState<User>()

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
