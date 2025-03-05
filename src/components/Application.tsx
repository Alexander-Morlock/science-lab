import React from "react"
import { UserContextProvider } from "./providers/UserContextProvider"
import { ApplicationRouter } from "./ApplicationRouter"
import ErrorBoundary from "./ErrorBoundary"
import { SnackbarContextProvider } from "./providers/SnackbarContextProvider"
import { TanStackQueryClientProvider as QueryClientProvider } from "./providers/TanStackQueryClientProvider"
import { QueryClient } from "@tanstack/react-query"

const queryClient = new QueryClient()

export default function Application() {
  return (
    <ErrorBoundary fallback={<h1>Sorry there is an error..</h1>}>
      <QueryClientProvider queryClient={queryClient}>
        <SnackbarContextProvider>
          <UserContextProvider>
            <ApplicationRouter />
          </UserContextProvider>
        </SnackbarContextProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  )
}
