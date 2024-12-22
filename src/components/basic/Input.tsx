import React, { DetailedHTMLProps, InputHTMLAttributes } from "react"
import * as Styled from "./Input.styled"
import { FieldErrors, FieldValues } from "react-hook-form"

type Props<T extends FieldValues = FieldValues> = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  errors: FieldErrors<T>
  required?: boolean
}

export function Input<T extends FieldValues = FieldValues>({
  errors,
  required,
  ...props
}: Props<T>) {
  const key = props.name
  const errorMessage = key
    ? errors[key]?.type ?? errors[key]?.message ?? ""
    : ""

  return (
    <Styled.Wrapper $error={!!errorMessage} $required={required}>
      <input {...props} />
      {!!errorMessage && <Styled.Error>{`${errorMessage}`}</Styled.Error>}
    </Styled.Wrapper>
  )
}
