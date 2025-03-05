import React from "react"
import { Loader } from "../../components/Loader"
import { apiClient } from "../../api/apiClient"
import { NoContent } from "../../components/NoContent"
import { PageTitle } from "../../components/PageTitle"
import { Container } from "../../components/basic/Container"
import { Section } from "../../components/basic/Section.styled"
import { UserDetailPreviewCard } from "./components/UserDetailPreviewCard"
import { useNavigate } from "react-router"
import { useUserRole } from "../../hooks/useUserRole"
import { Pages } from "../../router/types"
import { userPaths } from "../../router/userRoutes"
import { useQuery } from "@tanstack/react-query"

export default function UsersPage() {
  const { isAdmin } = useUserRole()
  const navigate = useNavigate()
  const navigateToCreateUserPage = () => navigate(userPaths.create())

  const { data: users, isLoading } = useQuery({
    queryKey: ["users.getAll"],
    queryFn: apiClient.user.getAll,
  })

  if (!users) {
    return isLoading ? <Loader /> : <NoContent />
  }

  return (
    <>
      <PageTitle page={Pages.USERS} />

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
