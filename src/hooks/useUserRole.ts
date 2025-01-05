import { UserRole } from "../api/types"
import { useUser } from "./useUser"

export function useUserRole() {
  const { user } = useUser()

  const isAdmin = user?.role === UserRole.ADMIN
  const isLabTechnician = user?.role === UserRole.LAB_TECHNICIAN
  const isScientist = user?.role === UserRole.SCIENTIST
  const isGuest = user?.role === UserRole.GUEST

  return { isAdmin, isLabTechnician, isScientist, isGuest }
}
