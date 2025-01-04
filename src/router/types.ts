import { JSX } from "react"

export type RouteDetail = {
  route: string
  getPath: (args?: any) => string
  title: string
  element: () => JSX.Element | null
  forLoggedUserOnly: boolean
}

export enum PageNames {
  // Client routes
  HOMEPAGE = "HOMEPAGE",
  LOGIN_PAGE = "LOGIN_PAGE",
  PUBLIC_EXPERIMENTS = "PUBLIC_EXPERIMENTS",
  DASHBOARD = "DASHBOARD",

  // Experiments routes
  CREATE_NEW_EXPERIMENT = "CREATE_NEW_EXPERIMENT",
  EDIT_EXPERIMENT = "EDIT_EXPERIMENT",
  EXPERIMENT_DETAIL = "EXPERIMENT_DETAIL",
}
