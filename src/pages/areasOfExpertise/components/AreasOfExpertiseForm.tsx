import React, { FormEventHandler } from "react"
import { Input } from "../../../components/basic/Input"
import { Container } from "../../../components/basic/Container"
import { FieldErrors, UseFormRegister } from "react-hook-form"
import { AreaOfExpertiseFromData } from "../../../api/types"
import { getAreaOfExpertiseFieldPlaceholder as getPlaceholder } from "../../../utils/utils"
import { Form } from "../../../components/Form"

type Props = {
  errors: FieldErrors<AreaOfExpertiseFromData>
  register: UseFormRegister<AreaOfExpertiseFromData>
  onSubmit?: FormEventHandler<HTMLFormElement> | undefined
  isInitialized?: boolean
}

export function AreasOfExpertiseForm({
  onSubmit,
  register,
  errors,
  isInitialized,
}: Props) {
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
      </Container>
    </Form>
  )
}
