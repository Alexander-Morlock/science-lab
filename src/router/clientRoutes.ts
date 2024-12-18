import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import PublicExperiments from "../pages/PublicExperiments"
import Dashboard from "../pages/Dashboard"
import { RouteDetail } from "./types"

export enum ClientPageNames {
  HOMEPAGE = "HOMEPAGE",
  LOGIN_PAGE = "LOGIN_PAGE",
  PUBLIC_EXPERIMENTS = "PUBLIC_EXPERIMENTS",
  DASHBOARD = "DASHBOARD",
}

export const clientRoutes: Record<ClientPageNames, RouteDetail> = {
  [ClientPageNames.HOMEPAGE]: {
    path: "/",
    title: "Homepage",
    element: HomePage,
    forLoggedUserOnly: false,
  },
  [ClientPageNames.LOGIN_PAGE]: {
    path: "/login",
    title: "Login",
    element: LoginPage,
    forLoggedUserOnly: false,
  },
  [ClientPageNames.PUBLIC_EXPERIMENTS]: {
    path: "/experiments/public",
    title: "Public experiments",
    element: PublicExperiments,
    forLoggedUserOnly: false,
  },
  [ClientPageNames.DASHBOARD]: {
    path: "/dashboard",
    title: "Dashboard",
    element: Dashboard,
    forLoggedUserOnly: false,
  },
}
