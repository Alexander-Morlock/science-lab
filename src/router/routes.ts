import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import PageForEveryone from "../pages/PageForEveryone"
import { ApplicationRoute } from "./types"
import { createRoute } from "./utils"

export enum PageNames {
  HOMEPAGE = "HOMEPAGE",
  LOGIN_PAGE = "LOGIN_PAGE",
  PAGE_FOR_EVERYONE = "PAGE_FOR_EVERYONE",
}

export const applicationRoutes: ApplicationRoute<PageNames> = {
  ...createRoute(PageNames.HOMEPAGE, "/", HomePage, true),
  ...createRoute(PageNames.LOGIN_PAGE, "/login", LoginPage, false),
  ...createRoute(
    PageNames.PAGE_FOR_EVERYONE,
    "/everyone",
    PageForEveryone,
    false
  ),
}
