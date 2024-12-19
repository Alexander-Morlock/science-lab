import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import PublicExperiments from "../pages/PublicExperiments"
import Dashboard from "../pages/Dashboard"
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
    element: PublicExperiments,
    forLoggedUserOnly: false,
  },
  [PageNames.DASHBOARD]: {
    path: "/dashboard",
    title: "Dashboard",
    element: Dashboard,
    forLoggedUserOnly: false,
  },
}
