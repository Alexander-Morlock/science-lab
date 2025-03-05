import { EquipmentDetail } from "../types"
import { xhr } from "../xhr"

export const equipment = {
  /** Get a specific equipment by ID */
  get: (id: number) =>
    xhr.get<EquipmentDetail | undefined>(`/api/equipment/${id}`),

  /** Get all equipment */
  getAll: () => xhr.get<EquipmentDetail[] | undefined>(`/api/equipment`),

  /** Create a new equipment. (Admin only) */
  create: (equipment: EquipmentDetail) => xhr.post(`/api/equipment`, equipment),

  /** Update an existing equipment by ID. (Admin only) */
  update: (equipment: EquipmentDetail) =>
    xhr.put(`/api/equipment/${equipment.id}`, equipment),

  /** Delete an equipment by ID. (Admin only) */
  delete: (id: number) => xhr.delete(`/api/equipment/${id}`),
}
