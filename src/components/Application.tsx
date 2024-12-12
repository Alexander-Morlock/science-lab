import React from "react"
import { UserContextProvider } from "./UserContextProvider"
import { ApplicationRoutes } from "./ApplicationRoutes"
import ErrorBoundary from "./ErrorBoundary"

export default function Application() {
  return (
    <ErrorBoundary fallback={<h1>Sorry there is an error..</h1>}>
      <UserContextProvider>
        <ApplicationRoutes />
      </UserContextProvider>
    </ErrorBoundary>
  )
}
