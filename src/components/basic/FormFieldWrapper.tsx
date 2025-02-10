import React, { JSX, PropsWithChildren, useEffect, useState } from "react"
import * as Styled from "./FormFieldWrapper.styled"
import { FieldErrors, FieldValues } from "react-hook-form"

type Props<T extends FieldValues = FieldValues> = PropsWithChildren<{
  name?: string
  errors: FieldErrors<T>
  required?: boolean
  placeholder?: string
  input?: (setFocus: (value: boolean) => void) => JSX.Element
  showPlaceholder?: boolean
}>

export function FormFieldWrapper<T extends FieldValues = FieldValues>({
  name,
  errors,
  required,
  placeholder,
  input,
  children,
  showPlaceholder = false,
}: Props<T>) {
  const [isPlaceholder, setIsPlaceholder] = useState(false)

  useEffect(() => {
    if (showPlaceholder === undefined) {
      return
    }
    setIsPlaceholder(showPlaceholder)
  }, [showPlaceholder])

  const errorMessage = name
    ? errors[name]?.type ?? errors[name]?.message ?? ""
    : ""

  return (
    <Styled.Wrapper>
      <Styled.Subwrapper $error={!!errorMessage} $required={required}>
        {input?.(setIsPlaceholder)}
        {children}

        {(!!errorMessage || (!!placeholder && isPlaceholder)) && (
          <Styled.Message $error={!!errorMessage}>{`${
            errorMessage || placeholder
          }`}</Styled.Message>
        )}
      </Styled.Subwrapper>
    </Styled.Wrapper>
  )
}
