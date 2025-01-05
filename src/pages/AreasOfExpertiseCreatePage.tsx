import React from "react"
import { Section } from "../components/basic/Section"
import { useFetchData } from "../hooks/useFetchData"
import { apiClient } from "../api/apiClient"
import { useNavigate } from "react-router"
import { getPageRouteDetails } from "../router/utils"
import { PageNames } from "../router/types"
import { useRedirectToHomepageForRolesExcept } from "../hooks/useRedirectToHomepageForRolesExcept"
import { AreaOfExpertiseFromData, UserRole } from "../api/types"
import { Container } from "../components/basic/Container"
import { PageTitle } from "../components/PageTitle"
import { AreasOfExpertiseForm } from "../components/AreasOfExpertiseForm"
import { useAreasOfExpertiseForm } from "../hooks/useAreasOfExpertiseForm"

export default function AreasOfExpertiseCreatePage() {
  const navigate = useNavigate()

  useRedirectToHomepageForRolesExcept([UserRole.ADMIN])

  const { fetch: createAreaOfExpertise } = useFetchData(
    apiClient.areasOfExpertise.create
  )

  const navigateToAreasOfExpertisePage = () =>
    navigate(getPageRouteDetails(PageNames.AREAS_OF_EXPERTISE).route)

  const onValid = async (data: AreaOfExpertiseFromData) => {
    await createAreaOfExpertise(data.name)
    navigateToAreasOfExpertisePage()
  }

  const { onSubmit, register, errors } = useAreasOfExpertiseForm(onValid)

  return (
    <>
      <PageTitle pageName={PageNames.AREAS_OF_EXPERTISE_EDIT} />

      <Section>
        <AreasOfExpertiseForm
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />

        <Container>
          <button onClick={navigateToAreasOfExpertisePage}>
            Back to areas of expertise
          </button>
          <button onClick={onSubmit}>Submit</button>
        </Container>
      </Section>
    </>
  )
}
