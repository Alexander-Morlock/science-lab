import React, { FormEventHandler } from "react"
import { Input } from "../../../components/basic/Input"
import { Container } from "../../../components/basic/Container"
import { FieldErrors, UseFormRegister } from "react-hook-form"
import { UserFormData, UserRole } from "../../../api/types"
import { getUserFieldPlaceholder as getPlaceholder } from "../../../utils/utils"
import { Form } from "../../../components/Form"
import { Select } from "../../../components/basic/Select"

type Props = {
  errors: FieldErrors<UserFormData>
  register: UseFormRegister<UserFormData>
  onSubmit?: FormEventHandler<HTMLFormElement> | undefined
  isInitialized?: boolean
}

export function UserForm({ onSubmit, register, errors, isInitialized }: Props) {
  const userRoleOptions = Object.values(UserRole).map((role) => ({
    key: role,
    value: role,
  }))

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
          type="text"
          errors={errors}
          placeholder={getPlaceholder("email")}
          {...register("email", { required: true })}
          showPlaceholder={isInitialized}
          required
        />
        <Select
          errors={errors}
          defaultValue={UserRole.GUEST}
          placeholder={getPlaceholder("role")}
          {...register("role", { required: true })}
          options={userRoleOptions}
          required
        />
      </Container>
    </Form>
  )
}
