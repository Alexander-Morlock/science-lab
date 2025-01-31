import React from "react"
import { EquipmentDetail } from "../../../api/types"
import { Container } from "../../../components/basic/Container"
import { useUserRole } from "../../../hooks/useUserRole"
import { useNavigate } from "react-router"
import { getPageRouteDetails } from "../../../router/utils"
import { PageNames } from "../../../router/types"

type Props = EquipmentDetail & {
  onDelete: (id: number) => void
}

export function EquipmentPreviewCard({
  id,
  name,
  amount,
  experiments,
  onDelete,
}: Props) {
  const { isAdmin } = useUserRole()
  const navigate = useNavigate()

  return (
    <Container>
      <h3>{name}</h3>
      <ul>
        <li>Amount: {amount}</li>
        <li>
          Experiments:
          <ul>
            {experiments.map(({ title }) => (
              <li>{title}</li>
            ))}
          </ul>
        </li>
      </ul>
      {isAdmin && (
        <>
          <button
            onClick={() =>
              navigate(
                getPageRouteDetails(PageNames.EQUIPMENT_EDIT).getPath(id)
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
