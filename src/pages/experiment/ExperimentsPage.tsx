import React from "react"
import { Loader } from "../../components/Loader"
import { NoContent } from "../../components/NoContent"
import { ExperimentPreviewCard } from "./components/ExperimentPreviewCard"
import { Section } from "../../components/basic/Section"
import { Container } from "../../components/basic/Container"
import { apiClient } from "../../api/apiClient"
import { useFetchData } from "../../hooks/useFetchData"
import { PageTitle } from "../../components/PageTitle"
import { Pages } from "../../router/types"

export default function ExperimentsPage() {
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
      <PageTitle page={Pages.EXPERIMENTS} />

      <Section>
        <Container noPadding autoColumns>
          {experiments.map(({ responsiblePersonId, ...props }) => (
            <ExperimentPreviewCard
              responsiblePersonName={getReponsiblePersonName(
                responsiblePersonId
              )}
              key={props.id}
              {...props}
            />
          ))}
        </Container>
      </Section>
    </>
  )
}
