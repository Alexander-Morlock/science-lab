import React from "react"
import { useFetchData } from "../hooks/useFetchData"
import { apiClient } from "../api/apiClient"
import { Loader } from "../components/Loader"
import { NoContent } from "../components/NoContent"

export default function HomePage() {
  const { data, isLoading } = useFetchData(apiClient.experiments.getAll)
  console.log({ data })
  if (!data) {
    return isLoading ? <Loader /> : <NoContent />
  }

  return (
    <>
      <h1>HomePage</h1>
    </>
  )
}
