import React from "react"
import { AreaOfExpertise } from "../../../api/types"
import { Container } from "../../../components/basic/Container"
import { useUserRole } from "../../../hooks/useUserRole"
import { useNavigate } from "react-router"
import { areasOfExpertisePaths } from "../../../router/areasOfExpertiseRoutes"

type Props = AreaOfExpertise & {
  onDelete: (id: number) => void
}

export function AreaOfExpertisePreviewCard({ id, name, onDelete }: Props) {
  const { isAdmin } = useUserRole()
  const navigate = useNavigate()

  return (
    <Container>
      <h3>{name}</h3>
      {isAdmin && (
        <>
          <button onClick={() => navigate(areasOfExpertisePaths.edit(id))}>
            Edit
          </button>
          <button onClick={() => onDelete(id)}>Delete</button>
        </>
      )}
    </Container>
  )
}
