import React from "react"
import { useFetchData } from "../hooks/useFetchData"
import { apiClient } from "../api/apiClient"
import { Loader } from "../components/Loader"
import { NoContent } from "../components/NoContent"
import * as Styled from "./HomePage.styled"
import { ExperimentPreviewCard } from "../components/ExperimentPreviewCard"

export default function HomePage() {
  const { data: experiments, isLoading } = useFetchData(
    apiClient.experiments.getAll
  )

  if (!experiments) {
    return isLoading ? <Loader /> : <NoContent />
  }

  return (
    <>
      <h1>HomePage</h1>
      <Styled.ExperimentsSection>
        {experiments.map((experiment) => (
          <ExperimentPreviewCard key={experiment.id} {...experiment} />
        ))}
      </Styled.ExperimentsSection>
    </>
  )
}
