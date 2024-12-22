import React, { useEffect } from "react"
import { Loader } from "../components/Loader.styled"
import { NoContent } from "../components/NoContent"
import { Experiment } from "../api/types"
import { Container } from "../components/basic/Container"
import { Section } from "../components/basic/Section"
import { ExperimentForm } from "./ExperimentForm"
import { ExperimentTitle } from "../components/ExperimentTitle"
import { useExperimentForm } from "../hooks/useExperimentForm"
import { useNavigate } from "react-router"
import { PageNames } from "../router/types"
import { getPageRouteDetails } from "../router/utils"
import { apiClient } from "../api/apiClient"
import { useFetchData } from "../hooks/useFetchData"

export default function EditExperimentPage() {
  const { fetch: updateExperiment } = useFetchData(apiClient.experiments.update)

  const onValid = async (data: Experiment) => {
    await updateExperiment(data)
    navigate(getPageRouteDetails(PageNames.EXPERIMENT_DETAIL).getPath(data.id))
  }

  const {
    experiment,
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
    if (!experiment || isInitialized) {
      return
    }
    // fill form with a data from API once
    Object.entries(experiment).forEach(([key, value]) =>
      setValue(key as keyof Experiment, value)
    )

    setIsInitialized(true)
  }, [experiment, isInitialized, setIsInitialized, setValue])

  if (!experiment) {
    return isLoading ? <Loader /> : <NoContent />
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
