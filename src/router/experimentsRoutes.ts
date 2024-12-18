import CreateNewExperiment from "../pages/CreateNewExperiment"
import EditExperiment from "../pages/EditExperiment"
import ExperimentDetail from "../pages/ExperimentDetail"
import { RouteDetail } from "./types"

export enum ExperimentPageNames {
  CREATE_NEW_EXPERIMENT = "CREATE_NEW_EXPERIMENT",
  EDIT_EXPERIMENT = "EDIT_EXPERIMENT",
  EXPERIMENT_DETAIL = "EXPERIMENT_DETAIL",
}

export const experimentsRoutes: Record<ExperimentPageNames, RouteDetail> = {
  [ExperimentPageNames.CREATE_NEW_EXPERIMENT]: {
    path: "/experiments/create",
    title: "Create new experiment",
    element: CreateNewExperiment,
    forLoggedUserOnly: false,
  },
  [ExperimentPageNames.EDIT_EXPERIMENT]: {
    path: "/experiments/edit/:id",
    title: "Edit experiment",
    element: EditExperiment,
    forLoggedUserOnly: false,
  },
  [ExperimentPageNames.EXPERIMENT_DETAIL]: {
    path: "/experiments/:id",
    title: "Detail of experiment",
    element: ExperimentDetail,
    forLoggedUserOnly: false,
  },
}
