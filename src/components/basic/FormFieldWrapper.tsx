import React, { JSX, useState } from "react"
import * as Styled from "./FormFieldWrapper.styled"
import { FieldErrors, FieldValues } from "react-hook-form"

type Props<T extends FieldValues = FieldValues> = {
  name?: string
  errors: FieldErrors<T>
  required?: boolean
  placeholder?: string
  children: (setFocus: (value: boolean) => void) => JSX.Element
}

export function FormFieldWrapper<T extends FieldValues = FieldValues>({
  name,
  errors,
  required,
  placeholder,
  children,
}: Props<T>) {
  const [isPlaceholderMessage, setIsPlaceholderMessage] = useState(false)

  const errorMessage = name
    ? errors[name]?.type ?? errors[name]?.message ?? ""
    : ""

  return (
    <Styled.Wrapper $error={!!errorMessage} $required={required}>
      <Styled.Subwrapper>
        {children(setIsPlaceholderMessage)}
        {(!!errorMessage || (!!placeholder && isPlaceholderMessage)) && (
          <Styled.Message $error={!!errorMessage}>{`${
            placeholder || errorMessage
          }`}</Styled.Message>
        )}
      </Styled.Subwrapper>
    </Styled.Wrapper>
  )
}
