import { useNavigate } from "react-router"
import { UserRole } from "../api/types"
import { useUser } from "./useUser"
import { useEffect } from "react"
import { rootPaths } from "../router/rootRoutes"

export function useRedirectToHomepageForRolesExcept(roles: UserRole[]) {
  const { user } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (user && !roles.includes(user?.role)) {
      navigate(rootPaths.homepage())
    }
  }, [navigate, roles, user])
}
