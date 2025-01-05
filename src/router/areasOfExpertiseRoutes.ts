import AreasOfExpertiseCreatePage from "../pages/areasOfExpertise/AreasOfExpertiseCreatePage"
import AreasOfExpertiseEditPage from "../pages/areasOfExpertise/AreasOfExpertiseEditPage"
import AreasOfExpertisePage from "../pages/areasOfExpertise/AreasOfExpertisePage"
import { PageNames, RouteDetail } from "./types"

type AreasOfExpertiseRoutes =
  | PageNames.AREAS_OF_EXPERTISE
  | PageNames.AREAS_OF_EXPERTISE_CREATE_NEW
  | PageNames.AREAS_OF_EXPERTISE_EDIT

export const areasOfExpertiseRoutes: Record<
  AreasOfExpertiseRoutes,
  RouteDetail
> = {
  [PageNames.AREAS_OF_EXPERTISE]: {
    route: `/areasOfExpertise`,
    getPath: () => `/areasOfExpertise`,
    title: `Areas of Expertise`,
    element: AreasOfExpertisePage,
  },
  [PageNames.AREAS_OF_EXPERTISE_EDIT]: {
    route: `/areasOfExpertise/edit/:id`,
    getPath: (id: number) => `/areasOfExpertise/edit/${id}`,
    title: `Edit Area of Expertise`,
    element: AreasOfExpertiseEditPage,
  },
  [PageNames.AREAS_OF_EXPERTISE_CREATE_NEW]: {
    route: `/areasOfExpertise/add`,
    getPath: () => `/areasOfExpertise/add`,
    title: `Create New Area of Expertise`,
    element: AreasOfExpertiseCreatePage,
  },
}
