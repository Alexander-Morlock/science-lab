import React from "react"
import { PageNames } from "../router/types"
import { getPageRouteDetails } from "../router/utils"

export function PageTitle({ pageName }: { pageName: PageNames }) {
  return <h1>{getPageRouteDetails(pageName).title}</h1>
}
