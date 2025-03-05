import React, { useEffect, useState } from "react"
import { Loader } from "../../components/Loader"
import { NoContent } from "../../components/NoContent"
import { Section } from "../../components/basic/Section"
import { useFetchData } from "../../hooks/useFetchData"
import { apiClient } from "../../api/apiClient"
import { useNavigate, useParams } from "react-router"
import { useUserRole } from "../../hooks/useUserRole"
import { useRedirectToHomepageForRolesExcept } from "../../hooks/useRedirectToHomepageForRolesExcept"
import { EquipmentDetailFormData, UserRole } from "../../api/types"
import { EquipmentForm } from "./components/EquipmentForm"
import {
  convertEquipmentFormData,
  convertEquipmentToFormData,
} from "../../utils/utils"
import { PageTitle } from "../../components/PageTitle"
import { FormPageFooter } from "../../components/FormPageFooter"
import { useEquipmentForm } from "./hooks/useEquipmentForm"
import { Pages } from "../../router/types"
import { equipmentPaths } from "../../router/equipmentRoutes"
import { useQuery } from "@tanstack/react-query"

export default function EquipmentEditPage() {
  const id = Number(useParams().id)
  const { isAdmin } = useUserRole()
  const navigate = useNavigate()

  useRedirectToHomepageForRolesExcept([UserRole.ADMIN])

  const [isInitialized, setIsInitialized] = useState(false)

  const { data: detail, isLoading } = useQuery({
    queryKey: ["equipment.get", id],
    queryFn: () => apiClient.equipment.get(id),
    enabled: id !== undefined && isAdmin,
  })

  const { data: experiments, isLoading: isLoadingExperiments } = useQuery({
    queryKey: ["experiments.getAll"],
    queryFn: apiClient.experiments.getAll,
    enabled: isAdmin,
  })

  const { fetch: deleteEquipment } = useFetchData(apiClient.equipment.delete)

  const { fetch: updateEquipment } = useFetchData(apiClient.equipment.update)

  const onValid = async (data: EquipmentDetailFormData) => {
    if (!experiments) {
      return
    }

    await updateEquipment(convertEquipmentFormData(data, experiments))
    navigate(equipmentPaths.equipment())
  }

  const { onSubmit, register, errors, clearErrors, setValue } =
    useEquipmentForm(onValid)

  const navigateToEquipmentPage = () => navigate(equipmentPaths.equipment())

  const onReset = () => {
    setIsInitialized(false)
    clearErrors()
  }

  const onDelete = async () => {
    await deleteEquipment(id)
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
      <PageTitle page={Pages.EQUIPMENT_EDIT} />

      <Section>
        <EquipmentForm
          isInitialized={isInitialized}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
          experiments={experiments}
        />
        <FormPageFooter
          onCancel={navigateToEquipmentPage}
          onSubmit={onSubmit}
          onReset={onReset}
          onDelete={onDelete}
        />
      </Section>
    </>
  )
}
