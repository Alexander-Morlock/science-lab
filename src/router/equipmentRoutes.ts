import EquipmentCreatePage from "../pages/equipment/EquipmentCreatePage"
import EquipmentEditPage from "../pages/equipment/EquipmentEditPage"
import EquipmentPage from "../pages/equipment/EquipmentPage"
import { PageNames, RouteDetail } from "./types"

type EquipmentRoutes =
  | PageNames.EQUIPMENT
  | PageNames.EQUIPMENT_EDIT
  | PageNames.EQUIPMENT_CREATE

export const equipmentRoutes: Record<EquipmentRoutes, RouteDetail> = {
  [PageNames.EQUIPMENT]: {
    route: `/equipment`,
    getPath: () => `/equipment`,
    title: `Equipment`,
    element: EquipmentPage,
  },
  [PageNames.EQUIPMENT_EDIT]: {
    route: `/equipment/edit/:id`,
    getPath: (id: number) => `/equipment/edit/${id}`,
    title: `Edit Equipment`,
    element: EquipmentEditPage,
  },
  [PageNames.EQUIPMENT_CREATE]: {
    route: `/equipment/add`,
    getPath: () => `/equipment/add`,
    title: `Create Equipment`,
    element: EquipmentCreatePage,
  },
}
