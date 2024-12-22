import { Experiment } from "../api/types"
import { ExperimentDetailFieldsDescription } from "./constants"

function isExperimentKeyTypeGuard(
  key: string | keyof Experiment
): key is keyof Experiment {
  return key in ExperimentDetailFieldsDescription
}

export function getExperimentDetailFieldPlaceholder(
  key: string | keyof Experiment
) {
  return isExperimentKeyTypeGuard(key)
    ? ExperimentDetailFieldsDescription[key]
    : key
}
