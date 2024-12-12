import React from "react"
import { DebugUserSwitcher } from "./components/DebugUserSwitcher"
import { UserContextProvider } from "./context/UserContextProvider"
import { ApplicationRoutes } from "./router/ApplicationRoutes"
import ErrorBoundary from "./components/ErrorBoundary"

export default function Application() {
  return (
    <ErrorBoundary fallback={<h1>Sorry there is an error..</h1>}>
      <UserContextProvider>
        <ApplicationRoutes />
      </UserContextProvider>
    </ErrorBoundary>
  )
}
