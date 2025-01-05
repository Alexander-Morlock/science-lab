import { useNavigate } from "react-router"
import { UserRole } from "../api/types"
import { useUser } from "./useUser"
import { getPageRouteDetails } from "../router/utils"
import { PageNames } from "../router/types"
import { useEffect } from "react"

export function useRedirectToHomepageForRolesExcept(roles: UserRole[]) {
  const { user } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (user && !roles.includes(user?.role)) {
      navigate(getPageRouteDetails(PageNames.HOMEPAGE).route)
    }
  }, [navigate, roles, user])
}
