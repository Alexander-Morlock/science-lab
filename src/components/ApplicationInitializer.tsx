import React, { PropsWithChildren } from "react"
import { BrowserRouter, Routes, Route } from "react-router"
import { ApplicationLayout } from "./layout/ApplicationLayout"
import { applicationRoutes } from "../router/routes"
import PageNotFound from "../pages/NotFoundPage"
import { useUser } from "../hooks/useUser"
import { apiClient } from "../api/apiClient"
import { useFetchData } from "../hooks/useFetchData"
import { Loader } from "./Loader.styled"
import { guestUser } from "../utils/constants"

/** Initialize application before rendering routes */
export function ApplicationInitializer({ children }: PropsWithChildren<{}>) {
  const { user, setUser } = useUser()

  const { isLoading } = useFetchData(apiClient.user.getCurrentUser, {
    autofetch: !user,
    onSuccess: setUser,
    onError: () => setUser(guestUser),
  })

  if (isLoading) {
    return <Loader />
  }

  return <>{children}</>
}
