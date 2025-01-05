import React, { FormEventHandler } from "react"
import { Input } from "./basic/Input"
import { Container } from "./basic/Container"
import { FieldErrors, UseFormRegister } from "react-hook-form"
import {
  EquipmentDetail,
  EquipmentDetailFormData,
  Experiment,
} from "../api/types"
import {
  getEquipmentDetailFieldPlaceholder as getPlaceholder,
  optionsMapper,
} from "../utils/utils"
import { Form } from "./Form"
import { Select } from "./basic/Select"

type Props = {
  experiments: Experiment[]
  errors: FieldErrors<EquipmentDetailFormData>
  register: UseFormRegister<EquipmentDetailFormData>
  onSubmit?: FormEventHandler<HTMLFormElement> | undefined
  isInitialized?: boolean
}

export function EquipmentForm({
  onSubmit,
  register,
  errors,
  experiments,
  isInitialized,
}: Props) {
  const experimentsOptions = experiments.map(({ id, title: name }) =>
    optionsMapper({ id, name })
  )

  return (
    <Form onSubmit={onSubmit}>
      <Container autoColumns>
        <Input
          type="text"
          errors={errors}
          placeholder={getPlaceholder("name")}
          {...register("name", { required: true })}
          showPlaceholder={isInitialized}
          required
        />
        <Input
          type="number"
          errors={errors}
          placeholder={getPlaceholder("amount")}
          {...register("amount", { required: true })}
          showPlaceholder={isInitialized}
          required
        />
        <Select
          multiple
          errors={errors}
          {...register("experimentsIds")}
          placeholder={getPlaceholder("experimentsIds")}
          options={experimentsOptions}
        />
      </Container>
    </Form>
  )
}
