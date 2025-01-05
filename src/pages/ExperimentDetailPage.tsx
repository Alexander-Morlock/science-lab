import React from "react"
import { useNavigate, useParams } from "react-router"
import { Loader } from "../components/Loader.styled"
import { NoContent } from "../components/NoContent"
import { Section } from "../components/basic/Section"
import { Container } from "../components/basic/Container"
import { getPageRouteDetails } from "../router/utils"
import { PageNames } from "../router/types"
import { getExperimentDetailFieldPlaceholder as getPlaceholder } from "../utils/utils"
import { useGetExperimentDetailsData } from "../hooks/useGetExperimentDetailsData"
import { useUserRole } from "../hooks/useUserRole"
import { PageTitle } from "../components/PageTitle"

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
      <PageTitle pageName={PageNames.EXPERIMENT_DETAIL} />

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
              navigate(
                getPageRouteDetails(PageNames.EXPERIMENT_EDIT).getPath(id)
              )
            }
          >
            Edit
          </button>
        )}
      </Section>
    </>
  )
}
