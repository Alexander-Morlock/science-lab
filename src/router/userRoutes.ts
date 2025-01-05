import UsersPage from "../pages/UsersPage"
import { PageNames, RouteDetail } from "./types"

type UserRoutes = PageNames.USERS

export const userRoutes: Record<UserRoutes, RouteDetail> = {
  [PageNames.USERS]: {
    route: `/users`,
    getPath: () => `/users`,
    title: `Users`,
    element: UsersPage,
  },
}
