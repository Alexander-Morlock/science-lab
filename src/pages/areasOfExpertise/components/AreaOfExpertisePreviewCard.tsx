import React from "react"
import { AreaOfExpertise } from "../../../api/types"
import { Container } from "../../../components/basic/Container"
import { useUserRole } from "../../../hooks/useUserRole"
import { useNavigate } from "react-router"
import { applicationRoutes } from "../../../router/routes"

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
          <button
            onClick={() =>
              navigate(
                applicationRoutes.areasOfExpertise.areasOfExpertiseEdit.getPath(
                  id
                )
              )
            }
          >
            Edit
          </button>
          <button onClick={() => onDelete(id)}>Delete</button>
        </>
      )}
    </Container>
  )
}
