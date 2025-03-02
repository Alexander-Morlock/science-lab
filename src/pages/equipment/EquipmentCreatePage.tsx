import React from "react"
import { Loader } from "../../components/Loader"
import { NoContent } from "../../components/NoContent"
import { Section } from "../../components/basic/Section"
import { useFetchData } from "../../hooks/useFetchData"
import { apiClient } from "../../api/apiClient"
import { useNavigate } from "react-router"
import { useUserRole } from "../../hooks/useUserRole"
import { useRedirectToHomepageForRolesExcept } from "../../hooks/useRedirectToHomepageForRolesExcept"
import { EquipmentDetailFormData, UserRole } from "../../api/types"
import { EquipmentForm } from "./components/EquipmentForm"
import { convertEquipmentFormData } from "../../utils/utils"
import { PageTitle } from "../../components/PageTitle"
import { FormPageFooter } from "../../components/FormPageFooter"
import { useEquipmentForm } from "./hooks/useEquipmentForm"
import { Pages } from "../../router/types"
import { equipmentPaths } from "../../router/equipmentRoutes"

export default function EquipmentCreatePage() {
  const { isAdmin } = useUserRole()
  const navigate = useNavigate()

  useRedirectToHomepageForRolesExcept([UserRole.ADMIN])

  const { data: experiments, isLoading } = useFetchData(
    apiClient.experiments.getAll,
    {
      autofetch: isAdmin,
    }
  )

  const { fetch: createEquipment } = useFetchData(apiClient.equipment.create)

  const onValid = async (data: EquipmentDetailFormData) => {
    if (!experiments) {
      return
    }

    await createEquipment(convertEquipmentFormData(data, experiments))
    navigate(equipmentPaths.equipment())
  }

  const { onSubmit, register, errors } = useEquipmentForm(onValid)

  const onCancel = () => navigate(equipmentPaths.equipment())

  if (!experiments) {
    return isLoading ? <Loader /> : <NoContent />
  }

  return (
    <>
      <PageTitle page={Pages.EQUIPMENT_CREATE} />

      <Section>
        <EquipmentForm
          onSubmit={onSubmit}
          register={register}
          errors={errors}
          experiments={experiments}
        />
        <FormPageFooter onCancel={onCancel} onSubmit={onSubmit} />
      </Section>
    </>
  )
}
