import React from "react"
import { Container } from "../../../components/basic/Container"
import { User } from "../../../api/types"
import { useNavigate } from "react-router"
import { getPageRouteDetails } from "../../../router/utils"
import { PageNames } from "../../../router/types"
import { useUser } from "../../../hooks/useUser"
import { useUserRole } from "../../../hooks/useUserRole"

export function UserDetailPreviewCard({ id, name, email, role }: User) {
  const { isAdmin } = useUserRole()
  const { user } = useUser()
  const isCurrentUserCard = user?.id === id

  const navigate = useNavigate()
  const navigateToUserEditPage = () =>
    navigate(getPageRouteDetails(PageNames.USER_EDIT).getPath(id))

  return (
    <Container>
      <h3>{name}</h3>
      <ul>
        <li>Email: {email}</li>
        <li>Role: {role}</li>
      </ul>
      {(isAdmin || isCurrentUserCard) && (
        <button onClick={navigateToUserEditPage}>Edit</button>
      )}
    </Container>
  )
}
