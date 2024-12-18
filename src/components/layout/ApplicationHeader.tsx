import React from "react"
import { NavLink } from "react-router"
import { applicationRoutes } from "../../router/routes"
import { ClientPageNames } from "../../router/clientRoutes"
import { ExperimentPageNames } from "../../router/experimentsRoutes"
import * as Styled from "./ApplicationLayout.styled"

const headerNavigationPagenames: (ClientPageNames | ExperimentPageNames)[] = [
  ClientPageNames.HOMEPAGE,
  ClientPageNames.LOGIN_PAGE,
  ClientPageNames.PUBLIC_EXPERIMENTS,
  ClientPageNames.DASHBOARD,
  ExperimentPageNames.CREATE_NEW_EXPERIMENT,
]

export function ApplicationHeader() {
  return (
    <Styled.Header>
      <nav>
        <Styled.HeaderNavigationList>
          {headerNavigationPagenames.map((pageName) => {
            const { path, title } = applicationRoutes[pageName]
            return (
              <li key={pageName}>
                <NavLink to={path}>{title}</NavLink>
              </li>
            )
          })}
        </Styled.HeaderNavigationList>
      </nav>
    </Styled.Header>
  )
}
