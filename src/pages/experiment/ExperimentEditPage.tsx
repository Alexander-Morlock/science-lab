import React, { useEffect, useState } from "react"
import { Loader } from "../../components/Loader.styled"
import { NoContent } from "../../components/NoContent"
import { ExperimentFormData, UserRole } from "../../api/types"
import { Section } from "../../components/basic/Section"
import { ExperimentForm } from "./components/ExperimentForm"
import { useNavigate, useParams } from "react-router"
import { apiClient } from "../../api/apiClient"
import { useFetchData } from "../../hooks/useFetchData"
import {
  convertExperimentFormData,
  convertExperimentToFormData,
} from "../../utils/utils"
import { useRedirectToHomepageForRolesExcept } from "../../hooks/useRedirectToHomepageForRolesExcept"
import { useUserRole } from "../../hooks/useUserRole"
import { PageTitle } from "../../components/PageTitle"
import { FormPageFooter } from "../../components/FormPageFooter"
import { useExperimentForm } from "./hooks/useExperimentForm"
import { useGetExperimentDetailsData } from "./hooks/useGetExperimentDetailsData"
import { applicationRoutes } from "../../router/routes"
import { Pages } from "../../router/constants"

export default function ExperimentEditPage() {
  const { id } = useParams()
  const [isInitialized, setIsInitialized] = useState(false)

  const { isAdmin, isScientist } = useUserRole()

  useRedirectToHomepageForRolesExcept([
    UserRole.ADMIN,
    UserRole.SCIENTIST,
    UserRole.LAB_TECHNICIAN,
  ])

  const { data: experiment, isLoading: isLoadingExperiment } =
    useGetExperimentDetailsData(id)

  const { fetch: updateExperiment } = useFetchData(apiClient.experiments.update)
  const { fetch: deleteExperiment } = useFetchData(apiClient.experiments.delete)

  const onValid = async (data: ExperimentFormData) => {
    await updateExperiment(convertExperimentFormData(data))
    navigate(applicationRoutes.experiments.detail.getPath(data.id))
  }

  const onDelete = async () => {
    await deleteExperiment(Number(id))
    navigate(applicationRoutes.root.homepage.getPath())
  }

  const {
    users,
    areasOfExpertise,
    equipment,
    setValue,
    isLoading,
    onSubmit,
    register,
    errors,
    clearErrors,
  } = useExperimentForm(onValid)

  const navigate = useNavigate()

  const onReset = () => {
    setIsInitialized(false)
    clearErrors()
  }

  useEffect(() => {
    if (!experiment || !areasOfExpertise || isInitialized || !equipment) {
      return
    }
    // fill form with a data from API once
    Object.entries(convertExperimentToFormData(experiment)).forEach(
      ([key, value]) => setValue(key as keyof ExperimentFormData, value)
    )

    setIsInitialized(true)
  }, [
    areasOfExpertise,
    equipment,
    experiment,
    isInitialized,
    setIsInitialized,
    setValue,
  ])

  if (!experiment || !users || !areasOfExpertise || !equipment) {
    return isLoading || isLoadingExperiment ? <Loader /> : <NoContent />
  }

  const onCancel = () =>
    navigate(applicationRoutes.experiments.detail.getPath(experiment.id))

  return (
    <>
      <PageTitle page={Pages.EXPERIMENT_EDIT} />

      <Section>
        <ExperimentForm
          isInitialized={isInitialized}
          users={users}
          equipment={equipment}
          areasOfExpertise={areasOfExpertise}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />
        <FormPageFooter
          onCancel={onCancel}
          onSubmit={onSubmit}
          onReset={onReset}
          onDelete={isAdmin || isScientist ? onDelete : undefined}
        />
      </Section>
    </>
  )
}
