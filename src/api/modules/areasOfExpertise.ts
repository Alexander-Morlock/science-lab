import { AreaOfExpertise } from "../types"
import { xhr } from "./xhr"

export const areasOfExpertise = {
  /** Get a specific area of expertise by ID */
  get: (id: number) =>
    xhr.get<AreaOfExpertise | undefined>(`/api/areasOfExpertise/${id}`),

  /** Get all areas of expertise */
  getAll: () => xhr.get<AreaOfExpertise[] | undefined>(`/api/areasOfExpertise`),

  /** Create a new area of expertise. (Admin only) */
  create: (name: string) => xhr.post(`/api/areasOfExpertise`, { name }),

  /** Update an existing area of expertise by ID. (Admin only) */
  update: (id: number, name: string) =>
    xhr.put(`/api/areasOfExpertise/${id}`, { name }),

  /** Delete an area of expertise by ID. (Admin only) */
  delete: (id: number) => xhr.delete(`/api/areasOfExpertise/${id}`),
}
