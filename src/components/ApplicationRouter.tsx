import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router"
import { ApplicationLayout } from "./layout/ApplicationLayout"
import { useUser } from "../hooks/useUser"
import { applicationRoutes } from "../router/routes"
import PageNotFound from "../pages/NotFoundPage"
import { PageNames } from "../router/types"

export function ApplicationRouter() {
  const { user } = useUser()

  const getElement = (
    pageName: string,
    Element: React.JSX.Element,
    forLoggedUserOnly: boolean
  ) => {
    if (forLoggedUserOnly && !user && pageName !== PageNames.LOGIN_PAGE) {
      return <Navigate to={applicationRoutes[PageNames.LOGIN_PAGE].path} />
    }

    if (pageName === PageNames.LOGIN_PAGE && user) {
      return <Navigate to={applicationRoutes[PageNames.HOMEPAGE].path} />
    }

    return Element
  }

  return (
    <BrowserRouter>
      <ApplicationLayout>
        <Routes>
          {Object.entries(applicationRoutes).map(
            ([pageName, { path, element: Element, forLoggedUserOnly }]) => {
              return (
                <Route
                  key={pageName}
                  path={path}
                  element={getElement(pageName, <Element />, forLoggedUserOnly)}
                />
              )
            }
          )}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ApplicationLayout>
    </BrowserRouter>
  )
}
