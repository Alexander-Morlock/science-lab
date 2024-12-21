import React from "react"
import { useParams } from "react-router"

export default function EditExperimentPage() {
  const { id } = useParams()
  return <h1>{`EditExperiment id:${id}`}</h1>
}
