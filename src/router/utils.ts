import { applicationRoutes } from "./routes"
import { PageNames, RouteDetail } from "./types"

export function getPageRouteDetails(pageName: PageNames): RouteDetail {
  return applicationRoutes[pageName]
}
