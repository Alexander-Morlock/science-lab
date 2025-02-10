import { JSX } from "react"
import { Pages } from "./types"
import { flattenRoutes } from "./routes"

type PageRouteBody<TGetPathParam> = {
  route: string
  getPath: TGetPathParam extends string | number
    ? (param: TGetPathParam) => string
    : () => string
  title: string
  element: () => JSX.Element | null
}

type CreatePageRouteProps<TPages extends Pages, TGetPathParam> = {
  page: TPages
} & PageRouteBody<TGetPathParam>

type CreatePageRoute<TPages extends Pages, TGetPathParam> = Record<
  TPages,
  PageRouteBody<TGetPathParam>
>

export function createPageRoute<TPages extends Pages, TGetPathParam>({
  page,
  route,
  getPath,
  title,
  element,
}: CreatePageRouteProps<TPages, TGetPathParam>) {
  return {
    [page]: {
      route,
      getPath,
      title,
      element,
    },
  } as CreatePageRoute<TPages, TGetPathParam>
}

export function getRouteDetails(page: Pages) {
  return flattenRoutes[page]
}
