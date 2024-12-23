import CreateNewExperimentPage from "../pages/CreateNewExperimentPage"
import EditExperimentPage from "../pages/EditExperimentPage"
import ExperimentDetailPage from "../pages/ExperimentDetailPage"
import { PageNames, RouteDetail } from "./types"

type ExperimentsPageNames =
  | PageNames.CREATE_NEW_EXPERIMENT
  | PageNames.EDIT_EXPERIMENT
  | PageNames.EXPERIMENT_DETAIL

export const experimentsRoutes: Record<ExperimentsPageNames, RouteDetail> = {
  [PageNames.CREATE_NEW_EXPERIMENT]: {
    route: `/experiments/create`,
    getPath: () => `/experiments/create`,
    title: `Create new experiment`,
    element: CreateNewExperimentPage,
    forLoggedUserOnly: false,
  },
  [PageNames.EDIT_EXPERIMENT]: {
    route: `/experiments/edit/:id`,
    getPath: (id: number) => `/experiments/edit/${id}`,
    title: `Edit experiment`,
    element: EditExperimentPage,
    forLoggedUserOnly: false,
  },
  [PageNames.EXPERIMENT_DETAIL]: {
    route: `/experiments/:id`,
    getPath: (id: number) => `/experiments/${id}`,
    title: `Detail of experiment`,
    element: ExperimentDetailPage,
    forLoggedUserOnly: false,
  },
}
