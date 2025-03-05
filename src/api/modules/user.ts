import { User, UserFormData, UserRole } from "../types"
import { xhr } from "../xhr"

export const user = {
  /** Get a specific user by ID */
  get: (id: number) => xhr.get<User | undefined>(`/api/users/${id}`),

  /** Get all users */
  getAll: () => xhr.get<User[] | undefined>(`/api/users`),

  /** Create a new user. (Admin only) */
  create: (user: UserFormData) => xhr.post(`/api/users`, user),

  /** Update an existing user by ID */
  update: (user: User) => xhr.put(`/api/users/${user.id}`, user),

  /** Delete a user by ID. (Admin only) */
  delete: (id: number) => xhr.delete(`/api/users/${id}`),

  /** Get a role of the authorized user */
  getCurrentUser: () => xhr.get<User>(`/api/users/current`),

  /** Update the role of a user. (Admin only) */
  updateRole: (id: number, role: UserRole) =>
    xhr.put(` /api/users/${id}/role`, role),

  /** HTML of login page from backend */
  getLoginPageHTML: () => xhr.get<string>(`/login`),
}
