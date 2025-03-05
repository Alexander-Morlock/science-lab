import React from "react"
import { BrowserRouter, Routes, Route } from "react-router"
import { ApplicationLayout } from "./layout/ApplicationLayout"
import { applicationRoutes } from "../router/routes"
import PageNotFound from "../pages/NotFoundPage"

export function ApplicationRouter() {
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
