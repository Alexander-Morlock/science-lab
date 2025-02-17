import React from "react"
import { Navigate } from "react-router"
import { applicationPaths } from "../router/routes"

export default function HomePage() {
  return <Navigate to={applicationPaths.experimentsPaths.experiments()} />
}
