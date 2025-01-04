import React from "react"
import { useNavigate, useParams } from "react-router"
import { Loader } from "../components/Loader.styled"
import { NoContent } from "../components/NoContent"
import { Section } from "../components/basic/Section"
import { Container } from "../components/basic/Container"
import { getPageRouteDetails } from "../router/utils"
import { PageNames } from "../router/types"
import { ExperimentTitle } from "../components/ExperimentTitle"
import { getExperimentDetailFieldPlaceholder as getPlaceholder } from "../utils/utils"
import { useGetExperimentDetailsData } from "../hooks/useGetExperimentDetailsData"

export default function ExperimentDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data: experiment, isLoading } = useGetExperimentDetailsData(id)

  if (!experiment) {
    return isLoading ? <Loader /> : <NoContent />
  }

  return (
    <>
      <ExperimentTitle title={experiment.title} />
      <Section>
        <Container>
          <ul>
            {Object.entries(experiment).map(([key, value]) => (
              <li key={key}>{`${getPlaceholder(key)}: ${value}`}</li>
            ))}
          </ul>
        </Container>
        <button
          onClick={() =>
            navigate(getPageRouteDetails(PageNames.EDIT_EXPERIMENT).getPath(id))
          }
        >
          Edit
        </button>
      </Section>
    </>
  )
}
