import UserCreatePage from "../pages/user/UserCreatePage"
import UserEditPage from "../pages/user/UserEditPage"
import UsersPage from "../pages/user/UsersPage"
import { PageNames, RouteDetail } from "./types"

type UserRoutes = PageNames.USERS | PageNames.USER_EDIT | PageNames.USER_CREATE

export const userRoutes: Record<UserRoutes, RouteDetail> = {
  [PageNames.USERS]: {
    route: `/users`,
    getPath: () => `/users`,
    title: `Users`,
    element: UsersPage,
  },
  [PageNames.USER_EDIT]: {
    route: `/users/edit/:id`,
    getPath: (id: number) => `/users/edit/${id}`,
    title: `User Edit`,
    element: UserEditPage,
  },
  [PageNames.USER_CREATE]: {
    route: `/users/add`,
    getPath: () => `/users/add`,
    title: `User Create`,
    element: UserCreatePage,
  },
}
