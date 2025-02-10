import ExperimentCreateNewPage from "../pages/experiment/ExperimentCreateNewPage"
import ExperimentEditPage from "../pages/experiment/ExperimentEditPage"
import ExperimentDetailPage from "../pages/experiment/ExperimentDetailPage"
import ExperimentsPage from "../pages/experiment/ExperimentsPage"
import { createPageRoute } from "./utils"
import { Pages } from "./constants"

export const experimentsRoutes = {
  ...createPageRoute({
    page: Pages.EXPERIMENTS,
    route: `/experiments`,
    getPath: () => `/experiments`,
    title: `Public Experiments`,
    element: ExperimentsPage,
  }),
  ...createPageRoute({
    page: Pages.EXPERIMENT_CREATE_NEW,
    route: `/experiments/create`,
    getPath: () => `/experiments/create`,
    title: `Create New Experiment`,
    element: ExperimentCreateNewPage,
  }),
  ...createPageRoute({
    page: Pages.EXPERIMENT_EDIT,
    route: `/experiments/edit/:id`,
    getPath: (id: number) => `/experiments/edit/${id}`,
    title: `Edit Experiment`,
    element: ExperimentEditPage,
  }),
  ...createPageRoute({
    page: Pages.EXPERIMENT_DETAIL,
    route: `/experiments/:id`,
    getPath: (id: number) => `/experiments/${id}`,
    title: `Detail of Experiment`,
    element: ExperimentDetailPage,
  }),
}
