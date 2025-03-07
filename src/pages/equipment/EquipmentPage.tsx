import React from "react"
import { Loader } from "../../components/Loader"
import { NoContent } from "../../components/NoContent"
import { Section } from "../../components/basic/Section"
import { Container } from "../../components/basic/Container"
import { apiClient } from "../../api/apiClient"
import { EquipmentPreviewCard } from "./components/EquipmentPreviewCard"
import { useUserRole } from "../../hooks/useUserRole"
import { useNavigate } from "react-router"
import { PageTitle } from "../../components/PageTitle"
import { Pages } from "../../router/types"
import { equipmentPaths } from "../../router/equipmentRoutes"
import { useMutation, useQuery } from "@tanstack/react-query"

export default function EquipmentPage() {
  const { isAdmin } = useUserRole()
  const navigate = useNavigate()

  const {
    data: equipment,
    isLoading,
    refetch: refetchEquipment,
  } = useQuery({
    queryKey: ["equipment.getAll"],
    queryFn: apiClient.equipment.getAll,
  })

  const { mutate: deleteEquipment } = useMutation({
    mutationFn: apiClient.equipment.delete,
  })

  const onDelete = async (id: number) => {
    await deleteEquipment(id)
    refetchEquipment()
  }

  if (!equipment) {
    return isLoading ? <Loader /> : <NoContent />
  }

  return (
    <>
      <PageTitle page={Pages.EQUIPMENT} />

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
          <button onClick={() => navigate(equipmentPaths.create())}>
            Create
          </button>
        )}
      </Section>
    </>
  )
}
