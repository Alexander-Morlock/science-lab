import HomePage from "../pages/HomePage"
import { PageNames, RouteDetail } from "./types"

type ClientPageNames = PageNames.HOMEPAGE

export const clientRoutes: Record<ClientPageNames, RouteDetail> = {
  [PageNames.HOMEPAGE]: {
    route: `/`,
    getPath: () => `/`,
    title: `Homepage`,
    element: HomePage,
  },
}
