import React from "react"
import { useFetchData } from "../hooks/useFetchData"
import { apiClient } from "../api/apiClient"
import { FullscreenLoaderOverlay } from "../components/FullscreenLoaderOverlay"

export default function HomePage() {
  const { data, isLoading } = useFetchData(apiClient.experiments.getAll)

  if (!data) {
    return isLoading ? <FullscreenLoaderOverlay /> : null
  }

  return (
    <>
      <h1>HomePage</h1>
    </>
  )
}
