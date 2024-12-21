import React from "react"
import { useParams } from "react-router"
import { useFetchData } from "../hooks/useFetchData"
import { apiClient } from "../api/apiClient"
import { Loader } from "../components/Loader.styled"
import { NoContent } from "../components/NoContent"
import { ExperimentPreviewCard } from "../components/ExperimentPreviewCard"

export default function ExperimentDetailPage() {
  const { id } = useParams()

  const { data: experiment, isLoading } = useFetchData(() =>
    apiClient.experiments.get(Number(id))
  )

  if (!experiment) {
    return isLoading ? <Loader /> : <NoContent />
  }

  return (
    <>
      <h1>{`ExperimentDetail id:${id}`}</h1>
      <ExperimentPreviewCard {...experiment} />
    </>
  )
}
