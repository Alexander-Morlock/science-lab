import React from "react"
import { NavLink } from "react-router"
import * as Styled from "./ApplicationLayout.styled"
import { PageNames } from "../../router/types"
import { getPageRouteDetails } from "../../router/utils"
import { useUserRole } from "../../hooks/useUserRole"

export function ApplicationHeader() {
  const { isScientist, isAdmin } = useUserRole()

  const headerNavigationPagenames = [
    PageNames.HOMEPAGE,
    ...(isScientist || isAdmin ? [PageNames.EXPERIMENT_CREATE_NEW] : []),
    PageNames.EQUIPMENT,
    PageNames.AREAS_OF_EXPERTISE,
  ]
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
