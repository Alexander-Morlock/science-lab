import EquipmentCreatePage from "../pages/equipment/EquipmentCreatePage"
import EquipmentEditPage from "../pages/equipment/EquipmentEditPage"
import EquipmentPage from "../pages/equipment/EquipmentPage"
import { Pages } from "./constants"
import { createPageRoute } from "./utils"

export const equipmentRoutes = {
  ...createPageRoute({
    page: Pages.EQUIPMENT,
    route: `/equipment`,
    getPath: () => `/equipment`,
    title: `Equipment`,
    element: EquipmentPage,
  }),
  ...createPageRoute({
    page: Pages.EQUIPMENT_EDIT,
    route: `/equipment/edit/:id`,
    getPath: (id: number) => `/equipment/edit/${id}`,
    title: `Edit Equipment`,
    element: EquipmentEditPage,
  }),
  ...createPageRoute({
    page: Pages.EQUIPMENT_CREATE,
    route: `/equipment/add`,
    getPath: () => `/equipment/add`,
    title: `Create Equipment`,
    element: EquipmentCreatePage,
  }),
}
