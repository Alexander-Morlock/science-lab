import { JSX } from "react"
import { ApplicationRoute } from "./types"

const FOR_LOGGED_USER_ONLY_DEFAULT = true

export function createRoute<PageName extends string>(
  pageName: PageName,
  path: string,
  element: () => JSX.Element,
  forLoggedUserOnly = FOR_LOGGED_USER_ONLY_DEFAULT
) {
  return {
    [pageName]: { path, element, forLoggedUserOnly },
  } as ApplicationRoute<PageName>
}
