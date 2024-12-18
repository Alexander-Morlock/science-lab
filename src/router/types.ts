import { JSX } from "react"

export type RouteDetail = {
  path: string
  title: string
  element: () => JSX.Element
  forLoggedUserOnly: boolean
}
