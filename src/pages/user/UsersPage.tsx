import React from "react"
import { Loader } from "../../components/Loader"
import { apiClient } from "../../api/apiClient"
import { useFetchData } from "../../hooks/useFetchData"
import { NoContent } from "../../components/NoContent"
import { PageTitle } from "../../components/PageTitle"
import { PageNames } from "../../router/types"
import { Container } from "../../components/basic/Container"
import { Section } from "../../components/basic/Section.styled"
import { UserDetailPreviewCard } from "./components/UserDetailPreviewCard"
import { useNavigate } from "react-router"
import { useUserRole } from "../../hooks/useUserRole"
import { getPageRouteDetails } from "../../router/utils"

export default function UsersPage() {
  const { isAdmin } = useUserRole()
  const navigate = useNavigate()
  const navigateToCreateUserPage = () =>
    navigate(getPageRouteDetails(PageNames.USER_CREATE).route)

  const { data: users, isLoading } = useFetchData(apiClient.user.getAll, {
    autofetch: true,
  })

  if (!users) {
    return isLoading ? <Loader /> : <NoContent />
  }

  return (
    <>
      <PageTitle pageName={PageNames.USERS} />

      <Section>
        <Container noPadding autoColumns>
          {users.map((user) => (
            <UserDetailPreviewCard key={user.id} {...user} />
          ))}
        </Container>
        {isAdmin && <button onClick={navigateToCreateUserPage}>Create</button>}
      </Section>
    </>
  )
}
