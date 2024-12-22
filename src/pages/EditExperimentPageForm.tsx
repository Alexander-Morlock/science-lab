import React, { FormEventHandler } from "react"
import { Input } from "../components/basic/Input"
import { Container } from "../components/basic/Container"
import { FieldErrors, UseFormRegister } from "react-hook-form"
import { Experiment } from "../api/types"
import { getExperimentDetailFieldsDescription } from "../utils/constants"

type Props = {
  errors: FieldErrors<Experiment>
  register: UseFormRegister<Experiment>
  onSubmit?: FormEventHandler<HTMLFormElement> | undefined
}

const requiredInputFields: (keyof Experiment)[] = [
  "id",
  "authorId",
  "title",
  "startDate",
  "endDate",
  "responsiblePersonId",
  "areasOfExpertiseIds",
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
  "equipmentIds",
  "participantIds",
  "fileIds",
]

export function EditExperimentPageForm({ onSubmit, register, errors }: Props) {
  return (
    <form onSubmit={onSubmit}>
      <Container autoColumns>
        {requiredInputFields.map((field) => (
          <Input
            type="text"
            errors={errors}
            placeholder={getExperimentDetailFieldsDescription(field)}
            {...register(field, { required: true })}
            required
          />
        ))}
        {optionalInputFields.map((field) => (
          <Input
            type="text"
            errors={errors}
            placeholder={getExperimentDetailFieldsDescription(field)}
            {...register(field)}
          />
        ))}
      </Container>
    </form>
  )
}
