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

export function getNonEmptyString(value?: string) {
  return value && value.length > 0 ? value : undefined
}

export function getNonEmptyArray<T>(value?: T[]) {
  return value && value.length > 0 ? value : undefined
}

export function convertExperimentFormData(
  data: ExperimentFormData
): Experiment {
  return {
    ...data,
    authorId: Number(data.authorId),
    responsiblePersonId: Number(data.responsiblePersonId),
    areasOfExpertiseIds: data.areasOfExpertiseIds.map(Number),
    equipmentIds: getNonEmptyArray(data.equipmentIds)?.map(Number),
    participantIds: getNonEmptyArray(data.participantIds)?.map(Number),
    fileIds: getNonEmptyArray(data.fileIds)?.map(Number),
    stateMark: getNonEmptyString(data.stateMark),
    description: getNonEmptyString(data.description),
    purpose: getNonEmptyString(data.purpose),
    expectedResults: getNonEmptyString(data.expectedResults),
    actualResults: getNonEmptyString(data.actualResults),
    conclusion: getNonEmptyString(data.conclusion),
  }
}

export function convertExperimentToFormData(
  data: Experiment
): ExperimentFormData {
  return {
    ...data,
    authorId: String(data.authorId),
    responsiblePersonId: String(data.responsiblePersonId),
    areasOfExpertiseIds: data.areasOfExpertiseIds.map(String),
    equipmentIds: data.equipmentIds?.map(String),
    participantIds: data.participantIds?.map(String),
    fileIds: data.fileIds?.map(String),
  }
}

export function optionsMapper({ name, id }: { name: string; id: number }) {
  return {
    key: name,
    value: String(id),
  }
}

export function getOptionsFromEnum(obj: Record<string, string>) {
  return Object.values(obj).map((value) => ({
    key: Capitalize(value),
    value,
  }))
}

export function Capitalize(value: string) {
  const lowerCaseValue = value.toLowerCase()
  const [firstLetter, ...letters] = lowerCaseValue
  return `${firstLetter.toUpperCase()}${letters.join("")}`
}
