import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import { PageNames, RouteDetail } from "./types"

type ClientPageNames = PageNames.HOMEPAGE | PageNames.LOGIN

export const clientRoutes: Record<ClientPageNames, RouteDetail> = {
  [PageNames.HOMEPAGE]: {
    route: `/`,
    getPath: () => `/`,
    title: `Homepage`,
    element: HomePage,
  },
  [PageNames.LOGIN]: {
    route: `/login`,
    getPath: () => `/login`,
    title: `Please log in`,
    element: LoginPage,
  },
}
