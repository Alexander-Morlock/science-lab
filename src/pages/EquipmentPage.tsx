import React from "react"
import { Loader } from "../components/Loader"
import { NoContent } from "../components/NoContent"
import { Section } from "../components/basic/Section"
import { Container } from "../components/basic/Container"
import { useFetchData } from "../hooks/useFetchData"
import { apiClient } from "../api/apiClient"
import { EquipmentPreviewCard } from "../components/EquipmentPreviewCard"
import { useUserRole } from "../hooks/useUserRole"
import { useNavigate } from "react-router"
import { getPageRouteDetails } from "../router/utils"
import { PageNames } from "../router/types"

export default function EquipmentPage() {
  const { isAdmin } = useUserRole()
  const navigate = useNavigate()

  const { data: equipment, isLoading } = useFetchData(
    apiClient.equipment.getAll,
    { autofetch: true }
  )

  if (!equipment) {
    return isLoading ? <Loader /> : <NoContent />
  }

  return (
    <>
      <h1>{getPageRouteDetails(PageNames.EQUIPMENT).title}</h1>
      <Section>
        <Container noPadding autoColumns>
          {equipment.map((detail) => (
            <EquipmentPreviewCard key={detail.id} {...detail} />
          ))}
        </Container>
        {isAdmin && (
          <button
            onClick={() =>
              navigate(getPageRouteDetails(PageNames.EQUIPMENT_CREATE).route)
            }
          >
            Create
          </button>
        )}
      </Section>
    </>
  )
}
