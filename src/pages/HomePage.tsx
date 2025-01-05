import React from "react"
import { Loader } from "../components/Loader"
import { NoContent } from "../components/NoContent"
import { ExperimentPreviewCard } from "../components/ExperimentPreviewCard"
import { useNavigate } from "react-router"
import { PageNames } from "../router/types"
import { getPageRouteDetails } from "../router/utils"
import { Section } from "../components/basic/Section"
import { Container } from "../components/basic/Container"
import { apiClient } from "../api/apiClient"
import { useFetchData } from "../hooks/useFetchData"

export default function HomePage() {
  const navigate = useNavigate()
  const { data: users, isLoading: isLoadingUsers } = useFetchData(
    apiClient.user.getAll,
    { autofetch: true }
  )

  const { data: experiments, isLoading: isLoadingExperiments } = useFetchData(
    () => apiClient.experiments.getAll(),
    { autofetch: true }
  )

  if (!experiments || !users) {
    return isLoadingUsers || isLoadingExperiments ? <Loader /> : <NoContent />
  }

  const getReponsiblePersonName = (id: number) =>
    users.find((user) => user.id === id)?.name

  return (
    <>
      <h1>{getPageRouteDetails(PageNames.HOMEPAGE).title}</h1>
      <Section>
        <Container noPadding autoColumns>
          {experiments.map(
            ({ id, title, startDate, endDate, state, responsiblePersonId }) => (
              <ExperimentPreviewCard
                key={id}
                onClick={() =>
                  navigate(
                    getPageRouteDetails(PageNames.EXPERIMENT_DETAIL).getPath(id)
                  )
                }
                {...{ id, title, startDate, endDate, state }}
                responsiblePersonName={getReponsiblePersonName(
                  responsiblePersonId
                )}
              />
            )
          )}
        </Container>
      </Section>
    </>
  )
}
