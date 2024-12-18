import { RouteDetail } from "./types"
import { ClientPageNames, clientRoutes } from "./clientRoutes"
import { ExperimentPageNames, experimentsRoutes } from "./experimentsRoutes"

type PageNames = ClientPageNames | ExperimentPageNames

export const applicationRoutes: Record<PageNames, RouteDetail> = {
  ...clientRoutes,
  ...experimentsRoutes,
}
