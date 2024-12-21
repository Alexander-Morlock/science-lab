import React from "react"
import { Link } from "react-router"
import { useFetchData } from "../hooks/useFetchData"
import { apiClient } from "../api/apiClient"

export default function HomePage() {
  const { data, isLoading } = useFetchData(apiClient.experiments.getAll)

  if (!data) {
    return isLoading ? <p>Loading...</p> : <></>
  }

  return (
    <>
      <h1>HomePage</h1>

      <p>
        <Link to="experiments/12">Details of the experiment id:12</Link>
      </p>
      <p>
        <Link to="experiments/edit/124">Edit the experiment id:124</Link>
      </p>
    </>
  )
}
