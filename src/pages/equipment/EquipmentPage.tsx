import React from "react"
import { Loader } from "../../components/Loader"
import { NoContent } from "../../components/NoContent"
import { Section } from "../../components/basic/Section"
import { Container } from "../../components/basic/Container"
import { useFetchData } from "../../hooks/useFetchData"
import { apiClient } from "../../api/apiClient"
import { EquipmentPreviewCard } from "./components/EquipmentPreviewCard"
import { useUserRole } from "../../hooks/useUserRole"
import { useNavigate } from "react-router"
import { Pages } from "../../router/types"
import { PageTitle } from "../../components/PageTitle"
import { applicationRoutes } from "../../router/routes"

export default function EquipmentPage() {
  const { isAdmin } = useUserRole()
  const navigate = useNavigate()

  const {
    data: equipment,
    isLoading,
    fetch: refetchEquipment,
  } = useFetchData(apiClient.equipment.getAll, { autofetch: true })

  const { fetch: deleteEquipment } = useFetchData(apiClient.equipment.delete)

  const onDelete = async (id: number) => {
    await deleteEquipment(id)
    refetchEquipment()
  }

  if (!equipment) {
    return isLoading ? <Loader /> : <NoContent />
  }

  return (
    <>
      <PageTitle pageName={Pages.EQUIPMENT} />

      <Section>
        <Container noPadding autoColumns>
          {equipment.map((detail) => (
            <EquipmentPreviewCard
              onDelete={onDelete}
              key={detail.id}
              {...detail}
            />
          ))}
        </Container>
        {isAdmin && (
          <button
            onClick={() =>
              navigate(applicationRoutes.equipment.equipmentCreate.getPath())
            }
          >
            Create
          </button>
        )}
      </Section>
    </>
  )
}
