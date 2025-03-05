import React from "react"
import { Loader } from "../../components/Loader"
import { NoContent } from "../../components/NoContent"
import { ExperimentPreviewCard } from "./components/ExperimentPreviewCard"
import { Section } from "../../components/basic/Section"
import { Container } from "../../components/basic/Container"
import { apiClient } from "../../api/apiClient"
import { PageTitle } from "../../components/PageTitle"
import { Pages } from "../../router/types"
import { useQuery } from "@tanstack/react-query"

export default function ExperimentsPage() {
  const { data: users, isLoading: isLoadingUsers } = useQuery({
    queryKey: ["users.getAll"],
    queryFn: apiClient.user.getAll,
  })

  const { data: experiments, isLoading: isLoadingExperiments } = useQuery({
    queryKey: ["experiments.getAll"],
    queryFn: apiClient.experiments.getAll,
  })

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
