import React from "react"
import { Loader } from "../components/Loader"
import { apiClient } from "../api/apiClient"
import { useFetchData } from "../hooks/useFetchData"
import { NoContent } from "../components/NoContent"
import { PageTitle } from "../components/PageTitle"
import { PageNames } from "../router/types"

export default function UsersPage() {
  const { data: users, isLoading } = useFetchData(apiClient.user.getAll, {
    autofetch: true,
  })

  if (!users) {
    return isLoading ? <Loader /> : <NoContent />
  }

  return (
    <>
      <PageTitle pageName={PageNames.USERS} />
    </>
  )
}
