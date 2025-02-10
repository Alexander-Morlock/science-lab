import { PageRoute, PageRouteDetails } from "./types"
import { flattenRoutes } from "./routes"
import { Pages } from "./constants"

type CreatePageRouteProps<TPages, TGetPathFunc> = {
  page: TPages
} & PageRouteDetails<TGetPathFunc>

export function createPageRoute<
  TPages extends Pages,
  TGetPathFunc extends (...args: any) => string
>({
  page,
  route,
  getPath,
  title,
  element,
}: CreatePageRouteProps<TPages, TGetPathFunc>) {
  return {
    [page]: {
      route,
      getPath,
      title,
      element,
    },
  } as PageRoute<TPages, TGetPathFunc>
}

export function getRouteDetails(page: Pages) {
  return flattenRoutes[page]
}
