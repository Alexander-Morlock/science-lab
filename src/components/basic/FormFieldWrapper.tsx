import React, { PropsWithChildren } from "react"
import * as Styled from "./FormFieldWrapper.styled"
import { FieldErrors, FieldValues } from "react-hook-form"

type Props<T extends FieldValues = FieldValues> = PropsWithChildren<{
  name?: string
  errors: FieldErrors<T>
  required?: boolean
}>

export function FormFieldWrapper<T extends FieldValues = FieldValues>({
  name,
  errors,
  required,
  children,
}: Props<T>) {
  const errorMessage = name
    ? errors[name]?.type ?? errors[name]?.message ?? ""
    : ""

  return (
    <Styled.Wrapper $error={!!errorMessage} $required={required}>
      {children}
      {!!errorMessage && <Styled.Error>{`${errorMessage}`}</Styled.Error>}
    </Styled.Wrapper>
  )
}
