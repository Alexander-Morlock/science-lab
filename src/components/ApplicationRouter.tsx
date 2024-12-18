import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router"
import { ApplicationLayout } from "./layout/ApplicationLayout"
import { useUserInfo } from "../hooks/useUserInfo"
import { applicationRoutes } from "../router/routes"
import PageNotFound from "../pages/PageNotFound"
import { ClientPageNames } from "../router/clientRoutes"

export function ApplicationRouter() {
  const {
    userInfo: { isLoggedIn },
  } = useUserInfo()

  const getElement = (
    pageName: string,
    Element: () => React.JSX.Element,
    forLoggedUserOnly: boolean
  ) => {
    if (
      forLoggedUserOnly &&
      !isLoggedIn &&
      pageName !== ClientPageNames.LOGIN_PAGE
    ) {
      return (
        <Navigate to={applicationRoutes[ClientPageNames.LOGIN_PAGE].path} />
      )
    }

    if (pageName === ClientPageNames.LOGIN_PAGE && isLoggedIn) {
      return <Navigate to={applicationRoutes[ClientPageNames.HOMEPAGE].path} />
    }

    return <Element />
  }

  return (
    <BrowserRouter>
      <ApplicationLayout>
        <Routes>
          {Object.entries(applicationRoutes).map(
            ([pageName, { path, element, forLoggedUserOnly }]) => (
              <Route
                key={pageName}
                path={path}
                element={getElement(pageName, element, forLoggedUserOnly)}
              />
            )
          )}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ApplicationLayout>
    </BrowserRouter>
  )
}
