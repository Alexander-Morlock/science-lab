import HomePage from "../pages/HomePage"
import { Pages } from "./types"
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
