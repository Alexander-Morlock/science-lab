import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React, { PropsWithChildren } from "react"

type Props = PropsWithChildren<{
  queryClient: QueryClient
}>

export function TanStackQueryClientProvider({ queryClient, children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
