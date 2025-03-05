import React from "react"
import { BrowserRouter, Routes, Route } from "react-router"
import { ApplicationLayout } from "./layout/ApplicationLayout"
import { applicationRoutes } from "../router/routes"
import PageNotFound from "../pages/NotFoundPage"
import { useUser } from "../hooks/useUser"
import { apiClient } from "../api/apiClient"
import { useFetchData } from "../hooks/useFetchData"
import { Loader } from "./Loader.styled"
import { guestUser } from "../utils/constants"

export function ApplicationRouter() {
  const { user, setUser } = useUser()

  const { isLoading } = useFetchData(apiClient.user.getCurrentUser, {
    autofetch: !user,
    onSuccess: setUser,
    onError: () => setUser(guestUser),
  })

  if (isLoading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <ApplicationLayout>
        <Routes>
          {Object.entries(applicationRoutes).map(
            ([page, { route, element: Element }]) => {
              return <Route key={page} path={route} element={<Element />} />
            }
          )}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ApplicationLayout>
    </BrowserRouter>
  )
}
