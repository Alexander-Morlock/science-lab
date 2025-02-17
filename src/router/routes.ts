import { rootRoutes } from "./rootRoutes"
import { experimentsRoutes } from "./experimentsRoutes"
import { equipmentRoutes } from "./equipmentRoutes"
import { areasOfExpertiseRoutes } from "./areasOfExpertiseRoutes"
import { userRoutes } from "./userRoutes"
import { Pages } from "./constants"

export const flattenRoutes = {
  ...rootRoutes,
  ...experimentsRoutes,
  ...equipmentRoutes,
  ...areasOfExpertiseRoutes,
  ...userRoutes,
}

export const applicationPaths = {
  rootPaths: {
    homepage: rootRoutes[Pages.HOMEPAGE].getPath,
  },
  experimentsPaths: {
    experiments: experimentsRoutes[Pages.EXPERIMENTS].getPath,
    detail: experimentsRoutes[Pages.EXPERIMENT_DETAIL].getPath,
    edit: experimentsRoutes[Pages.EXPERIMENT_EDIT].getPath,
    create: experimentsRoutes[Pages.EXPERIMENT_CREATE_NEW].getPath,
  },
  equipmentPaths: {
    equipment: equipmentRoutes[Pages.EQUIPMENT].getPath,
    edit: equipmentRoutes[Pages.EQUIPMENT_EDIT].getPath,
    create: equipmentRoutes[Pages.EQUIPMENT_CREATE].getPath,
  },
  areasOfExpertisePaths: {
    areasOfExpertise: areasOfExpertiseRoutes[Pages.AREAS_OF_EXPERTISE].getPath,
    edit: areasOfExpertiseRoutes[Pages.AREAS_OF_EXPERTISE_EDIT].getPath,
    create: areasOfExpertiseRoutes[Pages.AREAS_OF_EXPERTISE_CREATE_NEW].getPath,
  },
  usersPaths: {
    users: userRoutes[Pages.USERS].getPath,
    edit: userRoutes[Pages.USER_EDIT].getPath,
    create: userRoutes[Pages.USER_CREATE].getPath,
  },
}
