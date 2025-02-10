import React, { useEffect, useState } from "react"
import { Loader } from "../../components/Loader"
import { apiClient } from "../../api/apiClient"
import { useFetchData } from "../../hooks/useFetchData"
import { NoContent } from "../../components/NoContent"
import { PageTitle } from "../../components/PageTitle"
import { Section } from "../../components/basic/Section.styled"
import { Navigate, useNavigate, useParams } from "react-router"
import { useUser } from "../../hooks/useUser"
import { useUserRole } from "../../hooks/useUserRole"
import { UserForm } from "./components/UserForm"
import { FormPageFooter } from "../../components/FormPageFooter"
import { UserFormData } from "../../api/types"
import { useUserForm } from "./hooks/useUserForm"
import { applicationRoutes } from "../../router/routes"
import { Pages } from "../../router/constants"

export default function UserEditPage() {
  const navigate = useNavigate()
  const { user } = useUser()
  const { id } = useParams()
  const { isAdmin } = useUserRole()
  const isCurrentUser = user?.id === Number(id)

  const [isInitialized, setIsInitialized] = useState(false)

  const { fetch: deleteUser } = useFetchData(apiClient.user.delete)

  const { fetch: updateUser } = useFetchData(apiClient.user.update)

  const { data: userDetail, isLoading } = useFetchData(
    () => apiClient.user.get(Number(id)),
    {
      autofetch: id !== undefined,
    }
  )

  const navigateToUsersPage = () =>
    navigate(applicationRoutes.user.getAll.getPath())

  const onValid = async (data: UserFormData) => {
    await updateUser({ ...data, id: Number(id) })
    navigateToUsersPage()
  }

  const { onSubmit, register, errors, clearErrors, setValue } =
    useUserForm(onValid)

  const onReset = () => {
    setIsInitialized(false)
    clearErrors()
  }

  const onDelete = async () => {
    await deleteUser(Number(id))
    navigateToUsersPage()
  }

  useEffect(() => {
    if (!userDetail || isInitialized) {
      return
    }
    // fill form with a data from API once
    const keys: (keyof UserFormData)[] = ["name", "email", "role"]
    keys.forEach((key) => setValue(key, userDetail[key]))
    setIsInitialized(true)
  }, [isInitialized, setValue, userDetail])

  if (!(isAdmin || isCurrentUser))
    return <Navigate to={applicationRoutes.user.getAll.getPath()} />

  if (!userDetail) {
    return isLoading ? <Loader /> : <NoContent />
  }

  return (
    <>
      <PageTitle page={Pages.USER_EDIT} />

      <Section>
        <UserForm
          isInitialized={isInitialized}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />
        <FormPageFooter
          onCancel={navigateToUsersPage}
          onSubmit={onSubmit}
          onReset={onReset}
          onDelete={isAdmin ? onDelete : undefined}
        />
      </Section>
    </>
  )
}
