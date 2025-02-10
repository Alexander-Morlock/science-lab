import React from "react"
import { Loader } from "../../components/Loader"
import { NoContent } from "../../components/NoContent"
import { Section } from "../../components/basic/Section"
import { Container } from "../../components/basic/Container"
import { useFetchData } from "../../hooks/useFetchData"
import { apiClient } from "../../api/apiClient"
import { useUserRole } from "../../hooks/useUserRole"
import { useNavigate } from "react-router"
import { AreaOfExpertisePreviewCard } from "./components/AreaOfExpertisePreviewCard"
import { PageTitle } from "../../components/PageTitle"
import { applicationRoutes } from "../../router/routes"
import { Pages } from "../../router/constants"

export default function AreasOfExpertisePage() {
  const { isAdmin } = useUserRole()
  const navigate = useNavigate()

  const {
    data: areasOfExpertise,
    isLoading,
    fetch: refetchAreasOfExpertise,
  } = useFetchData(apiClient.areasOfExpertise.getAll, { autofetch: true })

  const { fetch: deleteAreaOfExpertise } = useFetchData(
    apiClient.areasOfExpertise.delete
  )

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
          <button
            onClick={() =>
              navigate(applicationRoutes.areasOfExpertise.create.getPath())
            }
          >
            Create
          </button>
        )}
      </Section>
    </>
  )
}
