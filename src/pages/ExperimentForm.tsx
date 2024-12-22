import React, { FormEventHandler } from "react"
import { Input } from "../components/basic/Input"
import { Container } from "../components/basic/Container"
import { FieldErrors, UseFormRegister } from "react-hook-form"
import { Experiment } from "../api/types"
import { getExperimentDetailFieldPlaceholder as getPlaceholder } from "../utils/utils"
import { Form } from "../components/Form"

type Props = {
  errors: FieldErrors<Experiment>
  register: UseFormRegister<Experiment>
  onSubmit?: FormEventHandler<HTMLFormElement> | undefined
}

const requiredInputFields: (keyof Experiment)[] = [
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

export function ExperimentForm({ onSubmit, register, errors }: Props) {
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
        {optionalInputFields.map((field) => (
          <Input
            key={field}
            type="text"
            errors={errors}
            placeholder={getPlaceholder(field)}
            {...register(field)}
          />
        ))}
      </Container>
    </Form>
  )
}