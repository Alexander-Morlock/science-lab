import UserCreatePage from "../pages/user/UserCreatePage"
import UserEditPage from "../pages/user/UserEditPage"
import UsersPage from "../pages/user/UsersPage"
import { Pages } from "./constants"
import { createPageRoute } from "./utils"

export const userRoutes = {
  ...createPageRoute({
    page: Pages.USERS,
    route: `/users`,
    getPath: () => `/users`,
    title: `Users`,
    element: UsersPage,
  }),
  ...createPageRoute({
    page: Pages.USER_EDIT,
    route: `/users/edit/:id`,
    getPath: (id: number) => `/users/edit/${id}`,
    title: `User Edit`,
    element: UserEditPage,
  }),
  ...createPageRoute({
    page: Pages.USER_CREATE,
    route: `/users/add`,
    getPath: () => `/users/add`,
    title: `User Create`,
    element: UserCreatePage,
  }),
}

export const userPaths = {
  users: userRoutes[Pages.USERS].getPath,
  edit: userRoutes[Pages.USER_EDIT].getPath,
  create: userRoutes[Pages.USER_CREATE].getPath,
}
