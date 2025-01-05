import ExperimentCreateNewPage from "../pages/experiment/ExperimentCreateNewPage"
import ExperimentEditPage from "../pages/experiment/ExperimentEditPage"
import ExperimentDetailPage from "../pages/experiment/ExperimentDetailPage"
import { PageNames, RouteDetail } from "./types"
import ExperimentsPage from "../pages/experiment/ExperimentsPage"

type ExperimentsPageNames =
  | PageNames.EXPERIMENTS
  | PageNames.EXPERIMENT_CREATE_NEW
  | PageNames.EXPERIMENT_EDIT
  | PageNames.EXPERIMENT_DETAIL

export const experimentsRoutes: Record<ExperimentsPageNames, RouteDetail> = {
  [PageNames.EXPERIMENTS]: {
    route: `/experiments`,
    getPath: () => `/experiments`,
    title: `Public Experiments`,
    element: ExperimentsPage,
  },
  [PageNames.EXPERIMENT_CREATE_NEW]: {
    route: `/experiments/create`,
    getPath: () => `/experiments/create`,
    title: `Create New Experiment`,
    element: ExperimentCreateNewPage,
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
