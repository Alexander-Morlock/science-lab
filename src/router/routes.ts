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
  experiments: {
    getAll: experimentsRoutes.experiments,
    detail: experimentsRoutes.experimentDetail,
    edit: experimentsRoutes.experimentEdit,
    create: experimentsRoutes.experimentCreateNew,
  },
  equipment: {
    getAll: equipmentRoutes.equipment,
    edit: equipmentRoutes.equipmentEdit,
    create: equipmentRoutes.equipmentCreate,
  },
  areasOfExpertise: {
    getAll: areasOfExpertiseRoutes.areasOfExpertise,
    edit: areasOfExpertiseRoutes.areasOfExpertiseEdit,
    create: areasOfExpertiseRoutes.areasOfExpertiseCreateNew,
  },
  user: {
    getAll: userRoutes.users,
    edit: userRoutes.userEdit,
    create: userRoutes.userCreate,
  },
}
