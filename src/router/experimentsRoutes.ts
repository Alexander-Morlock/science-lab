import ExperimentsCreateNewPage from "../pages/ExperimentsCreateNewPage"
import ExperimentEditPage from "../pages/ExperimentEditPage"
import ExperimentDetailPage from "../pages/ExperimentDetailPage"
import { PageNames, RouteDetail } from "./types"

type ExperimentsPageNames =
  | PageNames.EXPERIMENT_CREATE_NEW
  | PageNames.EXPERIMENT_EDIT
  | PageNames.EXPERIMENT_DETAIL

export const experimentsRoutes: Record<ExperimentsPageNames, RouteDetail> = {
  [PageNames.EXPERIMENT_CREATE_NEW]: {
    route: `/experiments/create`,
    getPath: () => `/experiments/create`,
    title: `Create New Experiment`,
    element: ExperimentsCreateNewPage,
  },
  [PageNames.EXPERIMENT_EDIT]: {
    route: `/experiments/edit/:id`,
    getPath: (id: number) => `/experiments/edit/${id}`,
    title: `Edit Experiment`,
    element: ExperimentEditPage,
  },
  [PageNames.EXPERIMENT_DETAIL]: {
    route: `/experiments/:id`,
    getPath: (id: number) => `/experiments/${id}`,
    title: `Detail of Experiment`,
    element: ExperimentDetailPage,
  },
}
