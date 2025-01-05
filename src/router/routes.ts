import { PageNames, RouteDetail } from "./types"
import { clientRoutes } from "./clientRoutes"
import { experimentsRoutes } from "./experimentsRoutes"
import { equipmentRoutes } from "./equipmentRoutes"
import { areasOfExpertiseRoutes } from "./areasOfExpertiseRoutes"

export const applicationRoutes: Record<PageNames, RouteDetail> = {
  ...clientRoutes,
  ...experimentsRoutes,
  ...equipmentRoutes,
  ...areasOfExpertiseRoutes,
}
