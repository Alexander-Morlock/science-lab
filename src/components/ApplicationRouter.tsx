import React from "react"
import { BrowserRouter, Routes, Route } from "react-router"
import { ApplicationLayout } from "./layout/ApplicationLayout"
import { applicationRoutes } from "../router/routes"
import PageNotFound from "../pages/NotFoundPage"
import { useUser } from "../hooks/useUser"
import { apiClient } from "../api/apiClient"
import { UserRole } from "../api/types"
import { useFetchData } from "../hooks/useFetchData"
import { Loader } from "./Loader.styled"
import LoginPage from "../pages/LoginPage"

export function ApplicationRouter() {
  const { user, setUser } = useUser()

  const { isLoading } = useFetchData(apiClient.user.getRole, {
    autofetch: !user,
    onSuccess: (role) =>
      setUser({
        role: role ?? UserRole.GUEST,
      }),
  })

  if (isLoading) {
    return <Loader />
  }

  const loggedInRoutes = (
    <>
      {Object.entries(applicationRoutes).map(
        ([pageName, { route, element: Element }]) => {
          return <Route key={pageName} path={route} element={<Element />} />
        }
      )}
      <Route path="*" element={<PageNotFound />} />
    </>
  )

  return (
    <BrowserRouter>
      <ApplicationLayout>
        <Routes>
          {user ? loggedInRoutes : <Route path="*" element={<LoginPage />} />}
        </Routes>
      </ApplicationLayout>
    </BrowserRouter>
  )
}
