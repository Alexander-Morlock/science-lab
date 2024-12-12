import React, { useState, PropsWithChildren } from "react"
import { UserInfo } from "../utils/types"
import { defaultUserContext, UserContext } from "../context/userContext"

export function UserContextProvider({ children }: PropsWithChildren) {
  const [userInfo, setUserInfo] = useState<UserInfo>(
    defaultUserContext.userInfo
  )

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  )
}
