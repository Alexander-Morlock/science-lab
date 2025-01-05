import React, { useEffect, useState } from "react"
import { Loader } from "../components/Loader"
import { NoContent } from "../components/NoContent"
import { Section } from "../components/basic/Section"
import { Container } from "../components/basic/Container"
import { useFetchData } from "../hooks/useFetchData"
import { apiClient } from "../api/apiClient"
import { useNavigate } from "react-router"
import { useUserRole } from "../hooks/useUserRole"
import { useRedirectToHomepageForRolesExcept } from "../hooks/useRedirectToHomepageForRolesExcept"
import { EquipmentDetailFormData, UserRole } from "../api/types"
import { getPageRouteDetails } from "../router/utils"
import { PageNames } from "../router/types"
import { useEquipmentForm } from "../hooks/useEquipmentForm"
import { EquipmentForm } from "../components/EquipmentForm"
import { convertEquipmentFormData } from "../utils/utils"

export default function EquipmentCreatePage() {
  const { isAdmin } = useUserRole()
  const navigate = useNavigate()

  const { data: experiments, isLoading } = useFetchData(
    apiClient.experiments.getAll,
    {
      autofetch: isAdmin,
    }
  )

  const { fetch: createEquipment } = useFetchData(apiClient.equipment.create)

  useRedirectToHomepageForRolesExcept([UserRole.ADMIN])

  const onValid = async (data: EquipmentDetailFormData) => {
    if (!experiments) {
      return
    }

    await createEquipment(convertEquipmentFormData(data, experiments))
    navigate(getPageRouteDetails(PageNames.EQUIPMENT).route)
  }

  const { onSubmit, register, errors } = useEquipmentForm(onValid)

  const onCancel = () =>
    navigate(getPageRouteDetails(PageNames.EQUIPMENT).route)

  if (!experiments) {
    return isLoading ? <Loader /> : <NoContent />
  }

  return (
    <>
      <h1>{getPageRouteDetails(PageNames.EQUIPMENT_CREATE).title}</h1>
      <Section>
        <EquipmentForm
          onSubmit={onSubmit}
          register={register}
          errors={errors}
          experiments={experiments}
        />
        <Container>
          <button onClick={onCancel}>Back to equipment</button>
          <button onClick={onSubmit}>Submit</button>
        </Container>
      </Section>
    </>
  )
}
