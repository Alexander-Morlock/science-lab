import React from "react"
import { Experiment } from "../api/types"
import { Container } from "./basic/Container"
import { ExperimentTitle } from "./ExperimentTitle"
import { getExperimentDetailFieldPlaceholder } from "../utils/constants"

type Props = Pick<
  Experiment,
  "id" | "title" | "startDate" | "endDate" | "state"
> & {
  responsiblePersonName?: string
  onClick?: () => void
}

export function ExperimentPreviewCard({
  onClick,
  title,
  startDate,
  endDate,
  state,
  responsiblePersonName,
}: Props) {
  return (
    <Container colorizeBackgroundColorOnHover onClick={onClick}>
      <ExperimentTitle title={title} headerLevel={3} />
      <ul>
        {Object.entries({
          startDate,
          endDate,
          state,
        }).map(([key, value]) => (
          <li key={key}>{`${getExperimentDetailFieldPlaceholder(
            key
          )}: ${value}`}</li>
        ))}
        <li>{`Reponsible person: ${responsiblePersonName}`}</li>
      </ul>
    </Container>
  )
}
