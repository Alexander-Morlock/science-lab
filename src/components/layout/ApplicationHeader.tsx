import React from "react"
import { NavLink } from "react-router"
import * as Styled from "./ApplicationLayout.styled"
import { getRouteDetails } from "../../router/utils"
import { useUserRole } from "../../hooks/useUserRole"
import { useUser } from "../../hooks/useUser"
import { Pages } from "../../router/constants"

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
            {headerNavigationPages.map((page) => {
              const { route, title } = getRouteDetails(page)
              return (
                <li key={page}>
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
