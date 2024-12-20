import axios from "axios"
import { Experiment, ExperimentState, LabPerson } from "../types"

export const experiments = {
  /** Get a specific experiment by ID */
  get: (experimentId: number) =>
    axios.get<Experiment | undefined>(`/api/experiments/${experimentId}`),

  /** Get all experiments */
  getAll: () => axios.get<Experiment[] | undefined>(`/api/experiments`),

  /** Create a new experiment. (Admin, Scientist) */
  create: (experiment: Experiment) =>
    axios.post(`/api/experiments`, experiment),

  /** Update an existing experiment by ID. (Admin, Scientist, Lab Technician) */
  update: (experiment: Experiment) =>
    axios.put(`/api/experiments/${experiment.id}`),

  /** Delete an experiment by ID. (Admin,Scientist) */
  delete: (experimentId: number) =>
    axios.delete(`/api/experiments/${experimentId}`),

  /** Update the state of an experiment. (Admin, Scientist) */
  updateState: (
    experimentId: number,
    newState: ExperimentState,
    updater: LabPerson
  ) =>
    axios.put(`/api/experiments/${experimentId}/state`, {
      newState,
      updater,
    }),

  /** Add a participant to an experiment. (Admin, Scientist) */
  addParticipant: (
    experimentId: number,
    participantId: number,
    requesterId: number
  ) =>
    axios.post(`/api/experiments/${experimentId}/participants`, {
      participantId,
      requesterId,
    }),

  /** Add a file to an experiment. (Admin, Scientist, Lab Technician) */
  addFile: (experimentId: number) =>
    axios.post(`/api/experiments/${experimentId}/files`),

  /** Remove a file from an experiment. (Admin, Scientist, Lab Technician) */
  deleteFile: (experimentId: number, fileId: number) =>
    axios.delete(` /api/experiments/${experimentId}/files/${fileId}`),
}
