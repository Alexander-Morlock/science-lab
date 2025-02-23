import { JSX } from "react"

export enum Pages {
  HOMEPAGE = "HOMEPAGE",

  EXPERIMENTS = "EXPERIMENTS",
  EXPERIMENT_DETAIL = "EXPERIMENT_DETAIL",
  EXPERIMENT_EDIT = "EXPERIMENT_EDIT",
  EXPERIMENT_CREATE_NEW = "EXPERIMENT_CREATE_NEW",

  EQUIPMENT = "EQUIPMENT",
  EQUIPMENT_EDIT = "EQUIPMENT_EDIT",
  EQUIPMENT_CREATE = "EQUIPMENT_CREATE",

  AREAS_OF_EXPERTISE = "AREAS_OF_EXPERTISE",
  AREAS_OF_EXPERTISE_CREATE_NEW = "AREAS_OF_EXPERTISE_CREATE_NEW",
  AREAS_OF_EXPERTISE_EDIT = "AREAS_OF_EXPERTISE_EDIT",

  USERS = "USERS",
  USER_EDIT = "USER_EDIT",
  USER_CREATE = "USER_CREATE",
}

export type PageRouteDetails<TGetPathFunc> = {
  route: string
  getPath: TGetPathFunc
  title: string
  element: () => JSX.Element | null
}

export type PageRoute<TPages extends Pages, TGetPathFunc> = Record<
  TPages,
  PageRouteDetails<TGetPathFunc>
>
