import React from "react"
import { Pages } from "../router/types"
import { getRouteDetails } from "../router/utils"

export function PageTitle({ pageName }: { pageName: Pages }) {
  return <h1>{getRouteDetails(pageName).title}</h1>
}
