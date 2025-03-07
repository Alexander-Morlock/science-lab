import React from "react"
import { Loader } from "../../components/Loader"
import { NoContent } from "../../components/NoContent"
import { Section } from "../../components/basic/Section"
import { Container } from "../../components/basic/Container"
import { apiClient } from "../../api/apiClient"
import { useUserRole } from "../../hooks/useUserRole"
import { useNavigate } from "react-router"
import { AreaOfExpertisePreviewCard } from "./components/AreaOfExpertisePreviewCard"
import { PageTitle } from "../../components/PageTitle"
import { Pages } from "../../router/types"
import { areasOfExpertisePaths } from "../../router/areasOfExpertiseRoutes"
import { useMutation, useQuery } from "@tanstack/react-query"

export default function AreasOfExpertisePage() {
  const { isAdmin } = useUserRole()
  const navigate = useNavigate()

  const {
    data: areasOfExpertise,
    isLoading,
    refetch: refetchAreasOfExpertise,
  } = useQuery({
    queryKey: ["areasOfExpertise.getAll"],
    queryFn: apiClient.areasOfExpertise.getAll,
  })

  const { mutate: deleteAreaOfExpertise } = useMutation({
    mutationFn: apiClient.areasOfExpertise.delete,
  })

  const onDelete = async (id: number) => {
    await deleteAreaOfExpertise(id)
    refetchAreasOfExpertise()
  }

  if (!areasOfExpertise) {
    return isLoading ? <Loader /> : <NoContent />
  }

  return (
    <>
      <PageTitle page={Pages.AREAS_OF_EXPERTISE} />

      <Section>
        <Container noPadding autoColumns>
          {areasOfExpertise.map((detail) => (
            <AreaOfExpertisePreviewCard
              onDelete={onDelete}
              key={detail.id}
              {...detail}
            />
          ))}
        </Container>
        {isAdmin && (
          <button onClick={() => navigate(areasOfExpertisePaths.create())}>
            Create
          </button>
        )}
      </Section>
    </>
  )
}
