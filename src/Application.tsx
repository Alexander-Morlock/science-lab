import React from "react"
import { UserContextProvider } from "./context/UserContextProvider"
import { ApplicationRoutes } from "./components/ApplicationRoutes"
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
