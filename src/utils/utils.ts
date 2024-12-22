import { Experiment, ExperimentFormData } from "../api/types"
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

export function convertExperimentFormData(
  data: ExperimentFormData
): Experiment {
  return {
    ...data,
    responsiblePersonId: Number(data.responsiblePersonId),
    areasOfExpertiseIds: data.areasOfExpertiseIds.map(Number),
    equipmentIds: data.equipmentIds?.map(Number),
    participantIds: data.participantIds?.map(Number),
    fileIds: data.fileIds?.map(Number),
  }
}

export function convertExperimentToFormData(
  data: Experiment
): ExperimentFormData {
  return {
    ...data,
    responsiblePersonId: String(data.responsiblePersonId),
    areasOfExpertiseIds: data.areasOfExpertiseIds.map(String),
    equipmentIds: data.equipmentIds?.map(String),
    participantIds: data.participantIds?.map(String),
    fileIds: data.fileIds?.map(String),
  }
}
