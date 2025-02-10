import React from "react"
import { Navigate } from "react-router"
import { applicationRoutes } from "../router/routes"

export default function HomePage() {
  return <Navigate to={applicationRoutes.experiments.experiments.getPath()} />
}
