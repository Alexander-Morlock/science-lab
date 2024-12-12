import React from "react"
import { DebugUserSwitcher } from "./components/DebugUserSwitcher"
import { UserContextProvider } from "./context/UserContextProvider"
import { ApplicationRoutes } from "./router/ApplicationRoutes"

export default function Application() {
  return (
    <UserContextProvider>
      <ApplicationRoutes>
        <DebugUserSwitcher />
      </ApplicationRoutes>
    </UserContextProvider>
  )
}
