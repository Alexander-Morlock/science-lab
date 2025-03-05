import React from "react"
import { apiClient } from "../../api/apiClient"
import { PageTitle } from "../../components/PageTitle"
import { Section } from "../../components/basic/Section.styled"
import { useNavigate } from "react-router"
import { UserForm } from "./components/UserForm"
import { FormPageFooter } from "../../components/FormPageFooter"
import { UserFormData } from "../../api/types"
import { useUserForm } from "./hooks/useUserForm"
import { Pages } from "../../router/types"
import { userPaths } from "../../router/userRoutes"
import { useMutation } from "@tanstack/react-query"

export default function UserCreatePage() {
  const navigate = useNavigate()

  const { mutate: createUser } = useMutation({
    mutationFn: apiClient.user.create,
  })

  const navigateToUsersPage = () => navigate(userPaths.users())

  const onValid = async (data: UserFormData) => {
    await createUser(data)
    navigateToUsersPage()
  }

  const { onSubmit, register, errors } = useUserForm(onValid)

  return (
    <>
      <PageTitle page={Pages.USER_EDIT} />

      <Section>
        <UserForm onSubmit={onSubmit} register={register} errors={errors} />
        <FormPageFooter onCancel={navigateToUsersPage} onSubmit={onSubmit} />
      </Section>
    </>
  )
}
