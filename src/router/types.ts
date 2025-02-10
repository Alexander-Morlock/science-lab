import { JSX } from "react"
import { Pages } from "./constants"

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
