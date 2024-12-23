import React, { FormEventHandler } from "react"
import { Input } from "./basic/Input"
import { Container } from "./basic/Container"
import { FieldErrors, UseFormRegister } from "react-hook-form"
import {
  AreaOfExpertise,
  EquipmentDetail,
  Experiment,
  ExperimentFormData,
  User,
} from "../api/types"
import {
  getExperimentDetailFieldPlaceholder as getPlaceholder,
  optionsMapper,
} from "../utils/utils"
import { Form } from "./Form"
import { Select } from "./basic/Select"

type Props = {
  users: User[]
  areasOfExpertise: AreaOfExpertise[]
  equipment: EquipmentDetail[]
  errors: FieldErrors<ExperimentFormData>
  register: UseFormRegister<ExperimentFormData>
  onSubmit?: FormEventHandler<HTMLFormElement> | undefined
}

const requiredInputFields: (keyof Experiment)[] = [
  "title",
  "startDate",
  "endDate",
  "visibility",
  "state",
]

const optionalInputFields: (keyof Experiment)[] = [
  "stateMark",
  "description",
  "purpose",
  "expectedResults",
  "actualResults",
  "conclusion",
]

export function ExperimentForm({
  onSubmit,
  register,
  errors,
  users,
  areasOfExpertise,
  equipment,
}: Props) {
  const usersOptions = users.map(optionsMapper)
  const areasOfExpertiseOptions = areasOfExpertise.map(optionsMapper)
  const equipmentOptions = equipment.map(optionsMapper)

  return (
    <Form onSubmit={onSubmit}>
      <Container autoColumns>
        <Select
          errors={errors}
          {...register("authorId")}
          placeholder={getPlaceholder("authorId")}
          options={usersOptions}
          required
        />
        {requiredInputFields.map((field) => (
          <Input
            key={field}
            type="text"
            errors={errors}
            placeholder={getPlaceholder(field)}
            {...register(field, { required: true })}
            required
          />
        ))}
        <Select
          errors={errors}
          {...register("responsiblePersonId")}
          placeholder={getPlaceholder("responsiblePersonId")}
          options={usersOptions}
          required
        />
        <Select
          multiple
          errors={errors}
          {...register("areasOfExpertiseIds")}
          placeholder={getPlaceholder("areasOfExpertiseIds")}
          options={areasOfExpertiseOptions}
          required
        />
        {optionalInputFields.map((field) => (
          <Input
            key={field}
            type="text"
            errors={errors}
            placeholder={getPlaceholder(field)}
            {...register(field)}
          />
        ))}
        <Select
          multiple
          errors={errors}
          {...register("equipmentIds")}
          placeholder={getPlaceholder("equipmentIds")}
          options={equipmentOptions}
        />
        <Select
          multiple
          errors={errors}
          {...register("participantIds")}
          placeholder={getPlaceholder("participantIds")}
          options={usersOptions}
        />
      </Container>
    </Form>
  )
}
