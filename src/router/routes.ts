import { rootRoutes } from "./rootRoutes"
import { experimentsRoutes } from "./experimentsRoutes"
import { equipmentRoutes } from "./equipmentRoutes"
import { areasOfExpertiseRoutes } from "./areasOfExpertiseRoutes"
import { userRoutes } from "./userRoutes"

export const applicationRoutes = {
  ...rootRoutes,
  ...experimentsRoutes,
  ...equipmentRoutes,
  ...areasOfExpertiseRoutes,
  ...userRoutes,
}
