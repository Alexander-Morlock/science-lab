import { Experiment, ExperimentState, LabPerson } from "../types"
import { xhr } from "./xhr"

export const experiments = {
  /** Get a specific experiment by ID */
  get: (experimentId: number) =>
    xhr.get<Experiment | undefined>(`/api/experiments/${experimentId}`),

  /** Get all experiments */
  getAll: () => xhr.get<Experiment[] | undefined>(`/api/experiments`),

  /** Create a new experiment. (Admin, Scientist) */
  create: (experiment: Experiment) =>
    xhr.post<{ id: number }>(`/api/experiments`, experiment),

  /** Update an existing experiment by ID. (Admin, Scientist, Lab Technician) */
  update: (experiment: Experiment) =>
    xhr.put(`/api/experiments/${experiment.id}`, experiment),

  /** Delete an experiment by ID. (Admin,Scientist) */
  delete: (experimentId: number) =>
    xhr.delete(`/api/experiments/${experimentId}`),

  /** Update the state of an experiment. (Admin, Scientist) */
  updateState: (
    experimentId: number,
    newState: ExperimentState,
    updater: LabPerson
  ) =>
    xhr.put(`/api/experiments/${experimentId}/state`, {
      newState,
      updater,
    }),

  /** Add a participant to an experiment. (Admin, Scientist) */
  addParticipant: (
    experimentId: number,
    participantId: number,
    requesterId: number
  ) =>
    xhr.post(`/api/experiments/${experimentId}/participants`, {
      participantId,
      requesterId,
    }),

  /** Add a file to an experiment. (Admin, Scientist, Lab Technician) */
  addFile: (experimentId: number) =>
    xhr.post(`/api/experiments/${experimentId}/files`),

  /** Remove a file from an experiment. (Admin, Scientist, Lab Technician) */
  deleteFile: (experimentId: number, fileId: number) =>
    xhr.delete(` /api/experiments/${experimentId}/files/${fileId}`),
}
