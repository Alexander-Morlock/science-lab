import React from "react"
import { Experiment } from "../api/types"
import { Container } from "./basic/Container"

export function ExperimentPreviewCard({
  title,
  startDate,
  endDate,
  state,
}: Experiment) {
  return (
    <Container>
      <h3>{title}</h3>
      <ul>
        <li>Start date: {startDate}</li>
        <li>End date: {endDate}</li>
        <li>State: {state}</li>
      </ul>
    </Container>
  )
}
