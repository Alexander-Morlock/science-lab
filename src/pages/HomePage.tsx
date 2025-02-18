import React from "react"
import { Navigate } from "react-router"
import { experimentsPaths } from "../router/experimentsRoutes"

export default function HomePage() {
  return <Navigate to={experimentsPaths.experiments()} />
}
