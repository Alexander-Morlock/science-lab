import React from "react"
import { useNavigate, useParams } from "react-router"
import { Loader } from "../../components/Loader.styled"
import { NoContent } from "../../components/NoContent"
import { Section } from "../../components/basic/Section"
import { Container } from "../../components/basic/Container"
import { getExperimentDetailFieldPlaceholder as getPlaceholder } from "../../utils/utils"
import { useUserRole } from "../../hooks/useUserRole"
import { PageTitle } from "../../components/PageTitle"
import { useGetExperimentDetailsData } from "./hooks/useGetExperimentDetailsData"
import { applicationPaths } from "../../router/routes"
import { Pages } from "../../router/constants"

export default function ExperimentDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isAdmin, isScientist, isLabTechnician } = useUserRole()
  const isAllowedToEdit = isAdmin || isScientist || isLabTechnician

  const { data: experiment, isLoading } = useGetExperimentDetailsData(id)

  if (!experiment) {
    return isLoading ? <Loader /> : <NoContent />
  }

  return (
    <>
      <PageTitle page={Pages.EXPERIMENT_DETAIL} />

      <Section>
        <Container>
          <ul>
            {Object.entries(experiment).map(([key, value]) => (
              <li key={key}>{`${getPlaceholder(key)}: ${value}`}</li>
            ))}
          </ul>
        </Container>
        {isAllowedToEdit && (
          <button
            onClick={() =>
              navigate(applicationPaths.experimentsPaths.edit(Number(id)))
            }
          >
            Edit
          </button>
        )}
      </Section>
    </>
  )
}
