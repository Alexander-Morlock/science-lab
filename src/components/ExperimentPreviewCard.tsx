import React from "react"
import { Experiment } from "../api/types"
import { Container } from "./basic/Container"
import { getExperimentDetailFieldPlaceholder as getPlaceholder } from "../utils/utils"
import { useNavigate } from "react-router"
import { PageNames } from "../router/types"
import { getPageRouteDetails } from "../router/utils"

type Props = Pick<
  Experiment,
  "id" | "title" | "startDate" | "endDate" | "state"
> & {
  responsiblePersonName?: string
}

export function ExperimentPreviewCard({
  id,
  title,
  startDate,
  endDate,
  state,
  responsiblePersonName,
}: Props) {
  const navigate = useNavigate()

  const onClick = () =>
    navigate(getPageRouteDetails(PageNames.EXPERIMENT_DETAIL).getPath(id))

  return (
    <Container colorizeBackgroundColorOnHover onClick={onClick}>
      <h3>{title}</h3>
      <ul>
        {Object.entries({
          startDate,
          endDate,
          state,
        }).map(([key, value]) => (
          <li key={key}>{`${getPlaceholder(key)}: ${value}`}</li>
        ))}
        <li>{`Reponsible person: ${responsiblePersonName}`}</li>
      </ul>
    </Container>
  )
}
