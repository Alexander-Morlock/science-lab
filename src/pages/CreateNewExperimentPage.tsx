import React from "react"
import { Container } from "../components/basic/Container"
import { Section } from "../components/basic/Section"
import { ExperimentForm } from "./ExperimentForm"
import { ExperimentTitle } from "../components/ExperimentTitle"
import { useExperimentForm } from "../hooks/useExperimentForm"
import { useFetchData } from "../hooks/useFetchData"
import { apiClient } from "../api/apiClient"
import { Loader } from "../components/Loader"
import { useNavigate } from "react-router"
import { Experiment } from "../api/types"
import { PageNames } from "../router/types"
import { getPageRouteDetails } from "../router/utils"

export default function CreateNewExperimentPage() {
  const navigate = useNavigate()
  const { fetch: updateExperiment } = useFetchData(
    apiClient.experiments.create,
    { autofetch: false }
  )

  const onValid = async (data: Experiment) => {
    const res = await updateExperiment(data)
    res?.id &&
      navigate(getPageRouteDetails(PageNames.EXPERIMENT_DETAIL).getPath(res.id))
  }

  const { onSubmit, register, errors, isLoading } = useExperimentForm(onValid)

  return (
    <>
      {isLoading && <Loader />}
      <ExperimentTitle />
      <Section>
        <ExperimentForm
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />
        <Container>
          <button onClick={onSubmit}>Submit</button>
        </Container>
      </Section>
    </>
  )
}
