import React from "react"
import { NavLink } from "react-router"
import * as Styled from "./ApplicationLayout.styled"
import { Pages } from "../../router/types"
import { getRouteDetails } from "../../router/utils"
import { useUserRole } from "../../hooks/useUserRole"
import { useUser } from "../../hooks/useUser"

export function ApplicationHeader() {
  const { isScientist, isAdmin } = useUserRole()
  const { user } = useUser()

  const headerNavigationPages = [
    Pages.HOMEPAGE,
    ...(isScientist || isAdmin ? [Pages.EXPERIMENT_CREATE_NEW] : []),
    Pages.EQUIPMENT,
    Pages.AREAS_OF_EXPERTISE,
    Pages.USERS,
  ]
  return (
    <>
      {!user?.name && (
        <Styled.UnauthorizedUserMessage>
          Unauthorized user (Guest mode)
        </Styled.UnauthorizedUserMessage>
      )}
      <Styled.Header>
        <nav>
          <Styled.HeaderNavigationList>
            {headerNavigationPages.map((pageName) => {
              const { route, title } = getRouteDetails(pageName)
              return (
                <li key={pageName}>
                  <NavLink to={route}>{title}</NavLink>
                </li>
              )
            })}
          </Styled.HeaderNavigationList>
        </nav>
      </Styled.Header>
    </>
  )
}
