import CreateNewExperiment from "../pages/CreateNewExperiment"
import EditExperiment from "../pages/EditExperiment"
import ExperimentDetail from "../pages/ExperimentDetail"
import { PageNames, RouteDetail } from "./types"

type ExperimentsPageNames =
  | PageNames.CREATE_NEW_EXPERIMENT
  | PageNames.EDIT_EXPERIMENT
  | PageNames.EXPERIMENT_DETAIL

export const experimentsRoutes: Record<ExperimentsPageNames, RouteDetail> = {
  [PageNames.CREATE_NEW_EXPERIMENT]: {
    path: "/experiments/create",
    title: "Create new experiment",
    element: CreateNewExperiment,
    forLoggedUserOnly: false,
  },
  [PageNames.EDIT_EXPERIMENT]: {
    path: "/experiments/edit/:id",
    title: "Edit experiment",
    element: EditExperiment,
    forLoggedUserOnly: false,
  },
  [PageNames.EXPERIMENT_DETAIL]: {
    path: "/experiments/:id",
    title: "Detail of experiment",
    element: ExperimentDetail,
    forLoggedUserOnly: false,
  },
}
