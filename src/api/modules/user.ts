import axios from "axios"
import { User, UserRole } from "../types"

export const user = {
  /** Get a specific user by ID */
  get: (id: number) => axios.get<User | undefined>(`/api/users/${id}`),

  /** Get all users */
  getAll: () => axios.get<User[] | undefined>(`/api/users`),

  /** Create a new user. (Admin only) */
  create: (user: User) => axios.post(`/api/users`, user),

  /** Update an existing user by ID */
  update: (user: User) => axios.put(`/api/users/${user.id}`, user),

  /** Delete a user by ID. (Admin only) */
  delete: (id: number) => axios.delete(`/api/users/${id}`),

  /** Get a role of the authorized user */
  getRole: () => axios.get<UserRole>(`/api/users/role`),

  /** Update the role of a user. (Admin only) */
  updateRole: (id: number, role: UserRole) =>
    axios.put(` /api/users/${id}/role`, role),

  /** HTML of login page from backend */
  getLoginPageHTML: () => axios.get<string>(`/login`),
}
