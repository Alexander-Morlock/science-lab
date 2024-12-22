import React, { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { FieldErrors, FieldValues } from "react-hook-form"
import { FormFieldWrapper } from "./FormFieldWrapper"

type Props<T extends FieldValues = FieldValues> = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  errors: FieldErrors<T>
  required?: boolean
}

export function Input<T extends FieldValues = FieldValues>({
  errors,
  ...props
}: Props<T>) {
  return (
    <FormFieldWrapper
      name={props.name}
      errors={errors}
      required={props.required}
      placeholder={props.placeholder}
    >
      {(setIsPlaceholderMessage) => (
        <input
          {...props}
          onInput={(event) =>
            setIsPlaceholderMessage(!!event.currentTarget.value.length)
          }
        />
      )}
    </FormFieldWrapper>
  )
}
