import React, { useEffect, useState } from "react"
import { Loader } from "../../components/Loader.styled"
import { NoContent } from "../../components/NoContent"
import { ExperimentFormData, UserRole } from "../../api/types"
import { Section } from "../../components/basic/Section"
import { ExperimentForm } from "./components/ExperimentForm"
import { useNavigate, useParams } from "react-router"
import { apiClient } from "../../api/apiClient"
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
import { Pages } from "../../router/types"
import { experimentsPaths } from "../../router/experimentsRoutes"
import { rootPaths } from "../../router/rootRoutes"
import { useMutation } from "@tanstack/react-query"

export default function ExperimentEditPage() {
  const id = Number(useParams().id)
  const [isInitialized, setIsInitialized] = useState(false)

  const { isAdmin, isScientist } = useUserRole()

  useRedirectToHomepageForRolesExcept([
    UserRole.ADMIN,
    UserRole.SCIENTIST,
    UserRole.LAB_TECHNICIAN,
  ])

  const { data: experiment, isLoading: isLoadingExperiment } =
    useGetExperimentDetailsData(id)

  const { mutate: updateExperiment } = useMutation({
    mutationFn: apiClient.experiments.update,
  })
  const { mutate: deleteExperiment } = useMutation({
    mutationFn: apiClient.experiments.delete,
  })

  const onValid = async (data: ExperimentFormData) => {
    await updateExperiment(convertExperimentFormData(data))
    navigate(experimentsPaths.detail(data.id))
  }

  const onDelete = async () => {
    await deleteExperiment(id)
    navigate(rootPaths.homepage())
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

  const onCancel = () => navigate(experimentsPaths.detail(experiment.id))

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
