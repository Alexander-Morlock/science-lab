import React from "react"
import { getRouteDetails } from "../router/utils"
import { Pages } from "../router/types"

export function PageTitle({ page }: { page: Pages }) {
  return <h1>{getRouteDetails(page).title}</h1>
}
