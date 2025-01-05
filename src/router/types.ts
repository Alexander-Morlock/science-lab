import { JSX } from "react"

export type RouteDetail = {
  route: string
  getPath: (args?: any) => string
  title: string
  element: () => JSX.Element | null
}

export enum PageNames {
  HOMEPAGE = "HOMEPAGE",

  EXPERIMENT_DETAIL = "EXPERIMENT_DETAIL",
  EDIT_EXPERIMENT = "EDIT_EXPERIMENT",
  CREATE_NEW_EXPERIMENT = "CREATE_NEW_EXPERIMENT",

  EQUIPMENT = "EQUIPMENT",
  EQUIPMENT_EDIT = "EQUIPMENT_EDIT",
  EQUIPMENT_CREATE = "EQUIPMENT_CREATE",
}
