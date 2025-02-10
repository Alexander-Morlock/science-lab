import AreasOfExpertiseCreatePage from "../pages/areasOfExpertise/AreasOfExpertiseCreatePage"
import AreasOfExpertiseEditPage from "../pages/areasOfExpertise/AreasOfExpertiseEditPage"
import AreasOfExpertisePage from "../pages/areasOfExpertise/AreasOfExpertisePage"
import { Pages } from "./types"
import { createPageRoute } from "./utils"

export const areasOfExpertiseRoutes = {
  ...createPageRoute({
    page: Pages.AREAS_OF_EXPERTISE,
    route: `/areasOfExpertise`,
    getPath: () => `/areasOfExpertise`,
    title: `Areas of Expertise`,
    element: AreasOfExpertisePage,
  }),
  ...createPageRoute({
    page: Pages.AREAS_OF_EXPERTISE_EDIT,
    route: `/areasOfExpertise/edit/:id`,
    getPath: (id: number) => `/areasOfExpertise/edit/${id}`,
    title: `Edit Area of Expertise`,
    element: AreasOfExpertiseEditPage,
  }),
  ...createPageRoute({
    page: Pages.AREAS_OF_EXPERTISE_CREATE_NEW,
    route: `/areasOfExpertise/add`,
    getPath: () => `/areasOfExpertise/add`,
    title: `Create New Area of Expertise`,
    element: AreasOfExpertiseCreatePage,
  }),
}
