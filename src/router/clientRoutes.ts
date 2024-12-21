import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import PublicExperimentsPage from "../pages/PublicExperimentsPage"
import DashboardPage from "../pages/DashboardPage"
import { PageNames, RouteDetail } from "./types"

type ClientPageNames =
  | PageNames.HOMEPAGE
  | PageNames.LOGIN_PAGE
  | PageNames.PUBLIC_EXPERIMENTS
  | PageNames.DASHBOARD

export const clientRoutes: Record<ClientPageNames, RouteDetail> = {
  [PageNames.HOMEPAGE]: {
    route: `/`,
    getPath: () => `/`,
    title: `Homepage`,
    element: HomePage,
    forLoggedUserOnly: false,
  },
  [PageNames.LOGIN_PAGE]: {
    route: `/login`,
    getPath: () => `/login`,
    title: `Login`,
    element: LoginPage,
    forLoggedUserOnly: false,
  },
  [PageNames.PUBLIC_EXPERIMENTS]: {
    route: `/experiments/public`,
    getPath: () => `/experiments/public`,
    title: `Public experiments`,
    element: PublicExperimentsPage,
    forLoggedUserOnly: false,
  },
  [PageNames.DASHBOARD]: {
    route: `/dashboard`,
    getPath: () => `/dashboard`,
    title: `Dashboard`,
    element: DashboardPage,
    forLoggedUserOnly: false,
  },
}
