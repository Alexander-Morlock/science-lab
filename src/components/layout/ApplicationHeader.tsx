import React from "react"
import { NavLink } from "react-router"
import * as Styled from "./ApplicationLayout.styled"
import { PageNames } from "../../router/types"
import { getPageRouteDetails } from "../../router/utils"
import { useUserRole } from "../../hooks/useUserRole"
import { useUser } from "../../hooks/useUser"

export function ApplicationHeader() {
  const { isScientist, isAdmin } = useUserRole()
  const { user } = useUser()

  const headerNavigationPagenames = [
    PageNames.HOMEPAGE,
    ...(isScientist || isAdmin ? [PageNames.EXPERIMENT_CREATE_NEW] : []),
    PageNames.EQUIPMENT,
    PageNames.AREAS_OF_EXPERTISE,
    PageNames.USERS,
  ]
  return (
    <>
      {!user?.name && (
        <p style={{ padding: "1rem", color: "white", backgroundColor: "red" }}>
          Unauthorized user (Guest mode)
        </p>
      )}
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
    </>
  )
}
