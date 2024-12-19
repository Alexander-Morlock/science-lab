import { PageNames, RouteDetail } from "./types"
import { clientRoutes } from "./clientRoutes"
import { experimentsRoutes } from "./experimentsRoutes"

export const applicationRoutes: Record<PageNames, RouteDetail> = {
  ...clientRoutes,
  ...experimentsRoutes,
}
