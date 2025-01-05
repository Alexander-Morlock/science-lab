import React, { useEffect, useState } from "react"
import { Loader } from "../components/Loader"
import { NoContent } from "../components/NoContent"
import { Section } from "../components/basic/Section"
import { useFetchData } from "../hooks/useFetchData"
import { apiClient } from "../api/apiClient"
import { useUserRole } from "../hooks/useUserRole"
import { useNavigate, useParams } from "react-router"
import { getPageRouteDetails } from "../router/utils"
import { PageNames } from "../router/types"
import { useRedirectToHomepageForRolesExcept } from "../hooks/useRedirectToHomepageForRolesExcept"
import { AreaOfExpertiseFromData, UserRole } from "../api/types"
import { PageTitle } from "../components/PageTitle"
import { AreasOfExpertiseForm } from "../components/AreasOfExpertiseForm"
import { useAreasOfExpertiseForm } from "../hooks/useAreasOfExpertiseForm"
import { FormPageFooter } from "../components/FormPageFooter"

export default function AreasOfExpertiseEditPage() {
  const { isAdmin } = useUserRole()
  const { id } = useParams()
  const navigate = useNavigate()
  const [isInitialized, setIsInitialized] = useState(false)

  useRedirectToHomepageForRolesExcept([UserRole.ADMIN])

  const { data: detail, isLoading } = useFetchData(
    () => apiClient.areasOfExpertise.get(Number(id)),
    {
      autofetch: id !== undefined && isAdmin,
    }
  )

  const { fetch: updateAreaOfExpertise } = useFetchData((name: string) =>
    apiClient.areasOfExpertise.update(Number(id), name)
  )
  const { fetch: deleteAreaOfExpertise } = useFetchData(
    apiClient.areasOfExpertise.delete
  )

  const navigateToAreasOfExpertisePage = () =>
    navigate(getPageRouteDetails(PageNames.AREAS_OF_EXPERTISE).route)

  const onDelete = async () => {
    await deleteAreaOfExpertise(Number(id))
    navigateToAreasOfExpertisePage()
  }

  const onValid = async (data: AreaOfExpertiseFromData) => {
    if (!id) {
      return
    }

    await updateAreaOfExpertise(data.name)
    navigateToAreasOfExpertisePage()
  }

  const { onSubmit, register, errors, clearErrors, setValue } =
    useAreasOfExpertiseForm(onValid)

  const onReset = () => {
    setIsInitialized(false)
    clearErrors()
  }

  useEffect(() => {
    if (!detail || isInitialized) {
      return
    }
    // fill form with a data from API once
    setValue("name", detail.name)
    setIsInitialized(true)
  }, [detail, isInitialized, setValue])

  if (!detail) {
    return isLoading ? <Loader /> : <NoContent />
  }

  return (
    <>
      <PageTitle pageName={PageNames.AREAS_OF_EXPERTISE_EDIT} />

      <Section>
        <AreasOfExpertiseForm
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />
        <FormPageFooter
          onCancel={navigateToAreasOfExpertisePage}
          onSubmit={onSubmit}
          onReset={onReset}
          onDelete={onDelete}
        />
      </Section>
    </>
  )
}
