import React from "react"
import { Container } from "../../../components/basic/Container"
import { User } from "../../../api/types"
import { useNavigate } from "react-router"
import { useUser } from "../../../hooks/useUser"
import { useUserRole } from "../../../hooks/useUserRole"
import { applicationRoutes } from "../../../router/routes"

export function UserDetailPreviewCard({ id, name, email, role }: User) {
  const { isAdmin } = useUserRole()
  const { user } = useUser()
  const isCurrentUserCard = user?.id === id

  const navigate = useNavigate()
  const navigateToUserEditPage = () =>
    navigate(applicationRoutes.user.edit.getPath(id))

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
