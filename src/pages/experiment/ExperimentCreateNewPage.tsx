import React from "react"
import { Section } from "../../components/basic/Section"
import { ExperimentForm } from "./components/ExperimentForm"
import { useFetchData } from "../../hooks/useFetchData"
import { apiClient } from "../../api/apiClient"
import { Loader } from "../../components/Loader"
import { useNavigate } from "react-router"
import { ExperimentFormData, UserRole } from "../../api/types"
import { NoContent } from "../../components/NoContent"
import { convertExperimentFormData } from "../../utils/utils"
import { useRedirectToHomepageForRolesExcept } from "../../hooks/useRedirectToHomepageForRolesExcept"
import { PageTitle } from "../../components/PageTitle"
import { FormPageFooter } from "../../components/FormPageFooter"
import { useExperimentForm } from "./hooks/useExperimentForm"
import { Pages } from "../../router/constants"
import { experimentsPaths } from "../../router/experimentsRoutes"
import { rootPaths } from "../../router/rootRoutes"

export default function ExperimentCreateNewPage() {
  const navigate = useNavigate()

  useRedirectToHomepageForRolesExcept([UserRole.ADMIN, UserRole.SCIENTIST])

  const { fetch: updateExperiment } = useFetchData(apiClient.experiments.create)

  const onValid = async (data: ExperimentFormData) => {
    const res = await updateExperiment(convertExperimentFormData(data))
    if (res?.id) {
      navigate(experimentsPaths.detail(res.id))
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

  const onCancel = () => navigate(rootPaths.homepage())

  if (!users || !areasOfExpertise || !equipment) {
    return isLoading ? <Loader /> : <NoContent />
  }

  return (
    <>
      <PageTitle page={Pages.EXPERIMENT_CREATE_NEW} />

      <Section>
        <ExperimentForm
          users={users}
          equipment={equipment}
          areasOfExpertise={areasOfExpertise}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />
        <FormPageFooter onCancel={onCancel} onSubmit={onSubmit} />
      </Section>
    </>
  )
}
