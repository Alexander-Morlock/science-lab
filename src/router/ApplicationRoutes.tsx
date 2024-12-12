import React, { PropsWithChildren } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router"
import { ApplicationLayout } from "../components/ApplicationLayout"
import { useUserInfo } from "../hooks/useUserInfo"
import { applicationRoutes, PageNames } from "./routes"

export function ApplicationRoutes() {
  const {
    userInfo: { isLoggedIn },
  } = useUserInfo()

  const getElement = (
    pageName: string,
    Element: () => React.JSX.Element,
    forLoggedUserOnly: boolean
  ) => {
    if (forLoggedUserOnly && !isLoggedIn && pageName !== PageNames.LOGIN_PAGE) {
      return <Navigate to={applicationRoutes[PageNames.LOGIN_PAGE].path} />
    }

    if (pageName === PageNames.LOGIN_PAGE && isLoggedIn) {
      return <Navigate to={applicationRoutes[PageNames.HOMEPAGE].path} />
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
        </Routes>
      </ApplicationLayout>
    </BrowserRouter>
  )
}
