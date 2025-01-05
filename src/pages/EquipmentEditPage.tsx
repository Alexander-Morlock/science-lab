import React, { useEffect, useState } from "react"
import { Loader } from "../components/Loader"
import { NoContent } from "../components/NoContent"
import { Section } from "../components/basic/Section"
import { Container } from "../components/basic/Container"
import { useFetchData } from "../hooks/useFetchData"
import { apiClient } from "../api/apiClient"
import { useNavigate, useParams } from "react-router"
import { useUserRole } from "../hooks/useUserRole"
import { useRedirectToHomepageForRolesExcept } from "../hooks/useRedirectToHomepageForRolesExcept"
import { EquipmentDetailFormData, UserRole } from "../api/types"
import { getPageRouteDetails } from "../router/utils"
import { PageNames } from "../router/types"
import { useEquipmentForm } from "../hooks/useEquipmentForm"
import { EquipmentForm } from "../components/EquipmentForm"
import {
  convertEquipmentFormData,
  convertEquipmentToFormData,
} from "../utils/utils"

export default function EquipmentEditPage() {
  const { id } = useParams()
  const { isAdmin } = useUserRole()
  const navigate = useNavigate()
  const [isInitialized, setIsInitialized] = useState(false)

  const { data: detail, isLoading } = useFetchData(
    () => apiClient.equipment.get(Number(id)),
    { autofetch: id !== undefined && isAdmin }
  )

  const { data: experiments, isLoading: isLoadingExperiments } = useFetchData(
    apiClient.experiments.getAll,
    {
      autofetch: isAdmin,
    }
  )

  const { fetch: deleteEquipment } = useFetchData(apiClient.equipment.delete)

  const { fetch: updateEquipment } = useFetchData(apiClient.equipment.update)

  useRedirectToHomepageForRolesExcept([UserRole.ADMIN])

  const onValid = async (data: EquipmentDetailFormData) => {
    if (!experiments) {
      return
    }

    await updateEquipment(convertEquipmentFormData(data, experiments))
    navigate(getPageRouteDetails(PageNames.EQUIPMENT).route)
  }

  const { onSubmit, register, errors, clearErrors, setValue } =
    useEquipmentForm(onValid)

  const navigateToEquipmentPage = () =>
    navigate(getPageRouteDetails(PageNames.EQUIPMENT).route)

  const onReset = () => {
    setIsInitialized(false)
    clearErrors()
  }

  const onDelete = async () => {
    await deleteEquipment(Number(id))
    navigateToEquipmentPage()
  }

  useEffect(() => {
    if (!detail || !experiments || isInitialized) {
      return
    }
    // fill form with a data from API once
    Object.entries(convertEquipmentToFormData(detail)).forEach(([key, value]) =>
      setValue(key as keyof EquipmentDetailFormData, value)
    )
    setIsInitialized(true)
  }, [detail, experiments, isInitialized, setValue])

  if (!detail || !experiments) {
    return isLoading || isLoadingExperiments ? <Loader /> : <NoContent />
  }

  return (
    <>
      <h1>{getPageRouteDetails(PageNames.EQUIPMENT_EDIT).title}</h1>
      <Section>
        <EquipmentForm
          isInitialized={isInitialized}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
          experiments={experiments}
        />
        <Container>
          <button onClick={navigateToEquipmentPage}>Back to equipment</button>
          <button onClick={onSubmit}>Submit</button>
          <button onClick={onReset}>Reset</button>
          <button onClick={onDelete}>Delete</button>
        </Container>
      </Section>
    </>
  )
}
