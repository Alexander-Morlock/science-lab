import React from "react"
import { NavLink } from "react-router"
import * as Styled from "./ApplicationLayout.styled"
import { PageNames } from "../../router/types"
import { getPageRouteDetails } from "../../router/utils"

const headerNavigationPagenames = [
  PageNames.HOMEPAGE,
  PageNames.CREATE_NEW_EXPERIMENT,
  PageNames.EQUIPMENT,
]

export function ApplicationHeader() {
  return (
    <Styled.Header>
      <nav>
        <Styled.HeaderNavigationList>
          {headerNavigationPagenames.map((pageName) => {
            const { route, title } = getPageRouteDetails(pageName)
            return (
              <li key={pageName}>
                <NavLink to={route}>{title}</NavLink>
              </li>
            )
          })}
        </Styled.HeaderNavigationList>
      </nav>
    </Styled.Header>
  )
}
