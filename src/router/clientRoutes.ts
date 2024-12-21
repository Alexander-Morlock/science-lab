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
    path: "/",
    title: "Homepage",
    element: HomePage,
    forLoggedUserOnly: false,
  },
  [PageNames.LOGIN_PAGE]: {
    path: "/login",
    title: "Login",
    element: LoginPage,
    forLoggedUserOnly: false,
  },
  [PageNames.PUBLIC_EXPERIMENTS]: {
    path: "/experiments/public",
    title: "Public experiments",
    element: PublicExperimentsPage,
    forLoggedUserOnly: false,
  },
  [PageNames.DASHBOARD]: {
    path: "/dashboard",
    title: "Dashboard",
    element: DashboardPage,
    forLoggedUserOnly: false,
  },
}
