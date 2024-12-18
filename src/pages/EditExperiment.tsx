import React from "react"
import { useParams } from "react-router"

export default function EditExperiment() {
  const { id } = useParams()
  return <h1>{`EditExperiment id:${id}`}</h1>
}
