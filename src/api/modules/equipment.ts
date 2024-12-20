import axios from "axios"
import { EquipmentDetail } from "../types"

export const equipment = {
  /** Get a specific equipment by ID */
  get: (id: number) =>
    axios.get<EquipmentDetail | undefined>(`/api/equipment/${id}`),

  /** Get all equipment */
  getAll: () => axios.get<EquipmentDetail[] | undefined>(`/api/equipment`),

  /** Create a new equipment. (Admin only) */
  create: (equipment: EquipmentDetail) =>
    axios.post(`/api/equipment`, equipment),

  /** Update an existing equipment by ID. (Admin only) */
  update: (id: number) => axios.put(`/api/equipment/${id}`),

  /** Delete an equipment by ID. (Admin only) */
  delete: (id: number) => axios.delete(`/api/equipment/${id}`),
}
