import React from "react"
import { Navigate } from "react-router"
import { getPageRouteDetails } from "../router/utils"
import { PageNames } from "../router/types"

export default function HomePage() {
  return <Navigate to={getPageRouteDetails(PageNames.EXPERIMENTS).route} />
}
