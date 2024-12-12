import { JSX } from "react"

export type ApplicationRoute<PageName extends string> = {
  [name in PageName]: {
    path: string
    element: () => JSX.Element
    forLoggedUserOnly: boolean
  }
}
