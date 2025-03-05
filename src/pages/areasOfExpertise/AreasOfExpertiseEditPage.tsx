import React, { useEffect, useState } from "react"
import { Loader } from "../../components/Loader"
import { NoContent } from "../../components/NoContent"
import { Section } from "../../components/basic/Section"
import { apiClient } from "../../api/apiClient"
import { useUserRole } from "../../hooks/useUserRole"
import { useNavigate, useParams } from "react-router"
import { useRedirectToHomepageForRolesExcept } from "../../hooks/useRedirectToHomepageForRolesExcept"
import { AreaOfExpertiseFromData, UserRole } from "../../api/types"
import { PageTitle } from "../../components/PageTitle"
import { AreasOfExpertiseForm } from "./components/AreasOfExpertiseForm"
import { FormPageFooter } from "../../components/FormPageFooter"
import { useAreasOfExpertiseForm } from "./hooks/useAreasOfExpertiseForm"
import { Pages } from "../../router/types"
import { areasOfExpertisePaths } from "../../router/areasOfExpertiseRoutes"
import { useMutation, useQuery } from "@tanstack/react-query"

export default function AreasOfExpertiseEditPage() {
  const { isAdmin } = useUserRole()
  const id = Number(useParams().id)
  const navigate = useNavigate()
  const [isInitialized, setIsInitialized] = useState(false)

  useRedirectToHomepageForRolesExcept([UserRole.ADMIN])

  const { data: detail, isLoading } = useQuery({
    queryKey: ["areasOfExpertise.get", id],
    queryFn: () => apiClient.areasOfExpertise.get(id),
    enabled: id !== undefined && isAdmin,
  })

  const { mutate: updateAreaOfExpertise } = useMutation({
    mutationFn: (name: string) => apiClient.areasOfExpertise.update(id, name),
  })
  const { mutate: deleteAreaOfExpertise } = useMutation({
    mutationFn: apiClient.areasOfExpertise.delete,
  })

  const navigateToAreasOfExpertisePage = () =>
    navigate(areasOfExpertisePaths.areasOfExpertise())

  const onDelete = async () => {
    await deleteAreaOfExpertise(id)
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
      <PageTitle page={Pages.AREAS_OF_EXPERTISE_EDIT} />

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
