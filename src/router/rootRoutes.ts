import HomePage from "../pages/HomePage"
import { Pages } from "./constants"
import { createPageRoute } from "./utils"

export const rootRoutes = {
  ...createPageRoute({
    page: Pages.HOMEPAGE,
    route: `/`,
    getPath: () => `/`,
    title: `Homepage`,
    element: HomePage,
  }),
}

export const rootPaths = {
  homepage: rootRoutes[Pages.HOMEPAGE].getPath,
}
