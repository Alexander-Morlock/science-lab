import { Experiment } from "../api/types"

export const MOBILE_DEVICE_MAX_WIDTH_PX = 640
export const TABLET_DEVICE_MAX_WIDTH_PX = 1024

export enum DeviceColumns {
  MOBILE = 1,
  TABLET = 2,
  DESKTOP = 3,
}

export const ExperimentDetailFieldsDescription: Record<
  keyof Experiment,
  string
> = {
  id: "id",
  authorId: "Author ID",
  title: "Title",
  startDate: "Start date",
  endDate: "End date",
  responsiblePersonId: "Responsible person ID",
  areasOfExpertiseIds: "Areas of expertise IDs",
  visibility: "Visibility",
  state: "State",
  stateMark: "State mark",
  description: "Description",
  purpose: "Purpose",
  expectedResults: "Expected results",
  actualResults: "Actual results",
  conclusion: "Conclusion",
  equipmentIds: "Equipment IDs",
  participantIds: "Participant IDs",
  fileIds: "File IDs",
}

export const DEFAULT_SNACKBAR_TIME_DURATION_MS = 2000
