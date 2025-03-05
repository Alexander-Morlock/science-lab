import { xhr } from "./xhr"

export const labPerson = {
  /** Add a participant experiment to a lab person. (Admin, Scientist) */
  addParticipant: (labPersonId: number) =>
    xhr.put(`/api/labPersons/${labPersonId}/participantExperiments`),

  /** Remove a participant experiment from a lab person. (Admin, Scientist) */
  deleteParticipant: (labPersonId: number, experimentId: number) =>
    xhr.delete(
      `/api/labPersons/${labPersonId}/participantExperiments/${experimentId}`
    ),

  /** Add a responsible experiment to a lab person. (Admin, Scientist) */
  addResponsibleExperiment: (labPersonId: number) =>
    xhr.put(`/api/labPersons/${labPersonId}/responsibleExperiments`),

  /** Remove a responsible experiment from a lab person. (Admin, Scientist) */
  deleteResponsibleExperiment: (labPersonId: number, experimentId: number) =>
    xhr.delete(
      `/api/labPersons/${labPersonId}/responsibleExperiments/${experimentId}`
    ),

  /** Add an authored experiment to a lab person. (Admin, Scientist) */
  addAuthoredExperiment: (labPersonId: number) =>
    xhr.put(`/api/labPersons/${labPersonId}/authoredExperiments`),

  /** Remove an authored experiment from a lab person. (Admin, Scientist) */
  deleteAuthoredExperiment: (labPersonId: number, experimentId: number) =>
    xhr.delete(
      `/api/labPersons/${labPersonId}/authoredExperiments/${experimentId}`
    ),

  /** Add an area of expertise to a lab person. (Admin, Scientist, Lab Technician) */
  addAreaOfExpertise: (labPersonId: number) =>
    xhr.put(`/api/labPersons/${labPersonId}/areasOfExpertise`),

  /** Remove an area of expertise from a lab person. (Admin, Scientist, Lab Technician) */
  deleteAreaOfExpertise: (labPersonId: number, areaOfExpertiseId: number) =>
    xhr.delete(
      `/api/labPersons/${labPersonId}/areasOfExpertise/${areaOfExpertiseId}`
    ),
}
