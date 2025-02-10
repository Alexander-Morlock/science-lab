import React from "react"
import { Section } from "../../components/basic/Section"
import { useFetchData } from "../../hooks/useFetchData"
import { apiClient } from "../../api/apiClient"
import { useNavigate } from "react-router"
import { Pages } from "../../router/types"
import { useRedirectToHomepageForRolesExcept } from "../../hooks/useRedirectToHomepageForRolesExcept"
import { AreaOfExpertiseFromData, UserRole } from "../../api/types"
import { PageTitle } from "../../components/PageTitle"
import { AreasOfExpertiseForm } from "./components/AreasOfExpertiseForm"
import { FormPageFooter } from "../../components/FormPageFooter"
import { useAreasOfExpertiseForm } from "./hooks/useAreasOfExpertiseForm"
import { applicationRoutes } from "../../router/routes"

export default function AreasOfExpertiseCreatePage() {
  const navigate = useNavigate()

  useRedirectToHomepageForRolesExcept([UserRole.ADMIN])

  const { fetch: createAreaOfExpertise } = useFetchData(
    apiClient.areasOfExpertise.create
  )

  const onCancel = () =>
    navigate(applicationRoutes.areasOfExpertise.areasOfExpertise.getPath())

  const onValid = async (data: AreaOfExpertiseFromData) => {
    await createAreaOfExpertise(data.name)
    onCancel()
  }

  const { onSubmit, register, errors } = useAreasOfExpertiseForm(onValid)

  return (
    <>
      <PageTitle pageName={Pages.AREAS_OF_EXPERTISE_EDIT} />

      <Section>
        <AreasOfExpertiseForm
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />
        <FormPageFooter onCancel={onCancel} onSubmit={onSubmit} />
      </Section>
    </>
  )
}
