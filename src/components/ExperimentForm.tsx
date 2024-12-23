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
import { getExperimentDetailFieldPlaceholder as getPlaceholder } from "../utils/utils"
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
  "authorId",
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
  return (
    <Form onSubmit={onSubmit}>
      <Container autoColumns>
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
          {...register("responsiblePersonId", { required: true })}
          placeholder={getPlaceholder("responsiblePersonId")}
          options={users.map(({ name: key, id }) => ({
            key,
            value: String(id),
          }))}
          required
        />
        <Select
          multiple
          errors={errors}
          {...register("areasOfExpertiseIds", { required: true })}
          placeholder={getPlaceholder("areasOfExpertiseIds")}
          options={areasOfExpertise.map(({ name: key, id }) => ({
            key,
            value: String(id),
          }))}
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
          options={equipment.map(({ name: key, id }) => ({
            key,
            value: String(id),
          }))}
        />
        <Select
          multiple
          errors={errors}
          {...register("participantIds")}
          placeholder={getPlaceholder("participantIds")}
          options={users.map(({ name: key, id }) => ({
            key,
            value: String(id),
          }))}
        />
      </Container>
    </Form>
  )
}