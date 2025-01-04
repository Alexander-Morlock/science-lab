import React, { useEffect } from "react"
import { Loader } from "../components/Loader.styled"
import { NoContent } from "../components/NoContent"
import { ExperimentFormData } from "../api/types"
import { Container } from "../components/basic/Container"
import { Section } from "../components/basic/Section"
import { ExperimentForm } from "../components/ExperimentForm"
import { ExperimentTitle } from "../components/ExperimentTitle"
import { useExperimentForm } from "../hooks/useExperimentForm"
import { useNavigate, useParams } from "react-router"
import { PageNames } from "../router/types"
import { getPageRouteDetails } from "../router/utils"
import { apiClient } from "../api/apiClient"
import { useFetchData } from "../hooks/useFetchData"
import {
  convertExperimentFormData,
  convertExperimentToFormData,
} from "../utils/utils"
import { useGetExperimentDetailsData } from "../hooks/useGetExperimentDetailsData"

export default function EditExperimentPage() {
  const { id } = useParams()

  const { data: experiment, isLoading: isLoadingExperiment } =
    useGetExperimentDetailsData(id)

  const { fetch: updateExperiment } = useFetchData(apiClient.experiments.update)

  const onValid = async (data: ExperimentFormData) => {
    await updateExperiment(convertExperimentFormData(data))
    navigate(getPageRouteDetails(PageNames.EXPERIMENT_DETAIL).getPath(data.id))
  }

  const {
    users,
    areasOfExpertise,
    equipment,
    isInitialized,
    setValue,
    setIsInitialized,
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
    navigate(
      getPageRouteDetails(PageNames.EXPERIMENT_DETAIL).getPath(experiment.id)
    )

  return (
    <>
      {isLoading && <Loader />}
      <ExperimentTitle title={experiment.title} />
      <Section>
        <ExperimentForm
          users={users}
          equipment={equipment}
          areasOfExpertise={areasOfExpertise}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />
        <Container>
          <button onClick={onCancel}>Back to details</button>
          <button onClick={onSubmit}>Submit</button>
          <button onClick={onReset}>Reset</button>
        </Container>
      </Section>
    </>
  )
}
