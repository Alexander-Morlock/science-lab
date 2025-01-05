import React from "react"
import { Container } from "../components/basic/Container"
import { Section } from "../components/basic/Section"
import { ExperimentForm } from "../components/ExperimentForm"
import { ExperimentTitle } from "../components/ExperimentTitle"
import { useExperimentForm } from "../hooks/useExperimentForm"
import { useFetchData } from "../hooks/useFetchData"
import { apiClient } from "../api/apiClient"
import { Loader } from "../components/Loader"
import { useNavigate } from "react-router"
import { ExperimentFormData } from "../api/types"
import { PageNames } from "../router/types"
import { getPageRouteDetails } from "../router/utils"
import { NoContent } from "../components/NoContent"
import { convertExperimentFormData } from "../utils/utils"

export default function CreateNewExperimentPage() {
  const navigate = useNavigate()

  const { fetch: updateExperiment } = useFetchData(apiClient.experiments.create)

  const onValid = async (data: ExperimentFormData) => {
    const res = await updateExperiment(convertExperimentFormData(data))
    if (res?.id) {
      navigate(getPageRouteDetails(PageNames.EXPERIMENT_DETAIL).getPath(res.id))
    }
  }

  const {
    onSubmit,
    register,
    errors,
    isLoading,
    users,
    areasOfExpertise,
    equipment,
  } = useExperimentForm(onValid)

  if (!users || !areasOfExpertise || !equipment) {
    return isLoading ? <Loader /> : <NoContent />
  }

  return (
    <>
      <ExperimentTitle />
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
          <button onClick={onSubmit}>Submit</button>
        </Container>
      </Section>
    </>
  )
}
