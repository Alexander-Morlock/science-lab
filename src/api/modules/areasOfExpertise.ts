import axios from "axios"
import { AreaOfExpertise } from "../types"

export const areasOfExpertise = {
  /** Get a specific area of expertise by ID */
  get: (id: number) =>
    axios.get<AreaOfExpertise | undefined>(`/api/areasOfExpertise/${id}`),

  /** Get all areas of expertise */
  getAll: () =>
    axios.get<AreaOfExpertise[] | undefined>(`/api/areasOfExpertise`),

  /** Create a new area of expertise. (Admin only) */
  create: (area: AreaOfExpertise) => axios.post(`/api/areasOfExpertise`, area),

  /** Update an existing area of expertise by ID. (Admin only) */
  update: (area: AreaOfExpertise) =>
    axios.put(`/api/areasOfExpertise/${area.id}`, area),

  /** Delete an area of expertise by ID. (Admin only) */
  delete: (id: number) => axios.delete(`/api/areasOfExpertise/${id}`),
}
