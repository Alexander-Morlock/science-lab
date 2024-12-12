import { JSX } from "react"
import { ApplicationRoute } from "./types"

export function createRoute<PageName extends string>(
  pageName: PageName,
  path: string,
  element: () => JSX.Element,
  forLoggedUserOnly: boolean
) {
  return {
    [pageName]: { path, element, forLoggedUserOnly },
  } as ApplicationRoute<PageName>
}
