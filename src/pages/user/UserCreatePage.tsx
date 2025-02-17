import React from "react"
import { apiClient } from "../../api/apiClient"
import { useFetchData } from "../../hooks/useFetchData"
import { PageTitle } from "../../components/PageTitle"
import { Section } from "../../components/basic/Section.styled"
import { useNavigate } from "react-router"
import { UserForm } from "./components/UserForm"
import { FormPageFooter } from "../../components/FormPageFooter"
import { UserFormData } from "../../api/types"
import { useUserForm } from "./hooks/useUserForm"
import { applicationPaths } from "../../router/routes"
import { Pages } from "../../router/constants"

export default function UserCreatePage() {
  const navigate = useNavigate()

  const { fetch: createUser } = useFetchData(apiClient.user.create)

  const navigateToUsersPage = () =>
    navigate(applicationPaths.usersPaths.users())

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
