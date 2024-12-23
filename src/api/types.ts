export enum ExperimentState {
  FINISHED = "FINISHED",
  IN_PROGRESS = "IN_PROGRESS",
  PLANNED = "PLANNED",
  CANCELED = "CANCELED",
}

export enum ExperimentVisibility {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
  SPECIAL = "SPECIAL",
}

export enum UserRole {
  ADMIN = "ADMIN",
  LAB_TECHNICIAN = "LAB_TECHNICIAN",
  SCIENTIST = "SCIENTIST",
  GUEST = "GUEST",
}

export type User = {
  id: number
  name: string
  email: string
  password: string
  role: UserRole // Default GUEST to avoid null pointer exception
}

export type LabPerson = User & {
  participantExperimentsIds: number[]
  responsibleExperimentsIds: number[]
  authoredExperimentsIds: number[]
  areasOfExpertiseIds: number[]
}

export type AreaOfExpertise = {
  id: number
  name: string
}

export type EquipmentDetail = {
  id: number
  name: string
  amount: number
  experiments: Experiment[]
}

export type ExperimentFile = {
  id: number
  name: string
  path: string
  experimentId: number
}

export type Experiment = {
  // Required
  id: number
  authorId: number
  title: string
  startDate: string
  endDate: string
  responsiblePersonId: number
  areasOfExpertiseIds: number[]
  visibility: ExperimentVisibility // default PRIVATE to avoid null pointer exception on BE
  state: ExperimentState // default PLANNED to avoid null pointer exception on BE
  // Optional
  stateMark?: string
  description?: string
  purpose?: string
  expectedResults?: string
  actualResults?: string
  conclusion?: string
  equipmentIds?: number[]
  participantIds?: number[]
  fileIds?: number[]
}

// Because <select> operates with string values only
export type ExperimentFormData = Omit<
  Experiment,
  | "authorId"
  | "responsiblePersonId"
  | "areasOfExpertiseIds"
  | "equipmentIds"
  | "participantIds"
  | "fileIds"
> & {
  authorId: string
  responsiblePersonId: string
  areasOfExpertiseIds: string[]
  equipmentIds?: string[]
  participantIds?: string[]
  fileIds?: string[]
}
