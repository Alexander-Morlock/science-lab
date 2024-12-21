import React from "react"
import { useParams } from "react-router"

export default function ExperimentDetailPage() {
  const { id } = useParams()
  return <h1>{`ExperimentDetail id:${id}`}</h1>
}
