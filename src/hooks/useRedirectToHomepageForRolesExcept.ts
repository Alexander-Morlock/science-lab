import { useNavigate } from "react-router"
import { UserRole } from "../api/types"
import { useUser } from "./useUser"
import { useEffect } from "react"
import { applicationRoutes } from "../router/routes"

export function useRedirectToHomepageForRolesExcept(roles: UserRole[]) {
  const { user } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (user && !roles.includes(user?.role)) {
      navigate(applicationRoutes.root.homepage.getPath())
    }
  }, [navigate, roles, user])
}
