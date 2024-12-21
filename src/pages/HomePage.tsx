import React from "react"
import { useFetchData } from "../hooks/useFetchData"
import { apiClient } from "../api/apiClient"
import { Loader } from "../components/Loader"
import { NoContent } from "../components/NoContent"
import * as Styled from "./HomePage.styled"
import { ExperimentPreviewCard } from "../components/ExperimentPreviewCard"

export default function HomePage() {
  const { data: users, isLoading: isLoadingUsers } = useFetchData(
    apiClient.user.getAll
  )

  const { data: experiments, isLoading: isLoadingExperiments } = useFetchData(
    apiClient.experiments.getAll
  )

  if (!experiments || !users) {
    return isLoadingUsers || isLoadingExperiments ? <Loader /> : <NoContent />
  }

  const getReponsiblePersonName = (id: number) =>
    users.find((user) => user.id === id)?.name

  return (
    <>
      <h1>HomePage</h1>
      <Styled.ExperimentsSection>
        {experiments.map(
          ({ id, title, startDate, endDate, state, responsiblePersonId }) => (
            <ExperimentPreviewCard
              key={id}
              {...{ title, startDate, endDate, state }}
              responsiblePersonName={getReponsiblePersonName(
                responsiblePersonId
              )}
            />
          )
        )}
      </Styled.ExperimentsSection>
    </>
  )
}
