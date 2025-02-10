import { rootRoutes } from "./rootRoutes"
import { experimentsRoutes } from "./experimentsRoutes"
import { equipmentRoutes } from "./equipmentRoutes"
import { areasOfExpertiseRoutes } from "./areasOfExpertiseRoutes"
import { userRoutes } from "./userRoutes"

export const flattenRoutes = {
  ...rootRoutes,
  ...experimentsRoutes,
  ...equipmentRoutes,
  ...areasOfExpertiseRoutes,
  ...userRoutes,
}

export const applicationRoutes = {
  root: rootRoutes,
  experiments: experimentsRoutes,
  equipment: equipmentRoutes,
  areasOfExpertise: areasOfExpertiseRoutes,
  user: userRoutes,
}
