import React from "react"
import { Experiment } from "../api/types"
import { Container } from "./basic/Container"
import { useNavigate } from "react-router"
import { PageNames } from "../router/types"
import { applicationRoutes } from "../router/routes"

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

  return (
    <Container
      colorizeBackgroundColorOnHover
      onClick={() =>
        navigate(applicationRoutes[PageNames.EXPERIMENT_DETAIL].getPath(id))
      }
    >
      <h3>{title}</h3>
      <ul>
        <li>Start date: {startDate}</li>
        <li>End date: {endDate}</li>
        <li>State: {state}</li>
        <li>Responsible person's name: {responsiblePersonName ?? "UNKNOWN"}</li>
      </ul>
    </Container>
  )
}
