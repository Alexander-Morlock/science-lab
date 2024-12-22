import React, { DetailedHTMLProps, SelectHTMLAttributes } from "react"
import { FieldErrors, FieldValues } from "react-hook-form"
import { FormFieldWrapper } from "./FormFieldWrapper"

type Props<T extends FieldValues = FieldValues> = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  errors: FieldErrors<T>
  options: { key: string; value: string }[]
  required?: boolean
}

export function Select<T extends FieldValues = FieldValues>({
  errors,
  options,
  ...props
}: Props<T>) {
  return (
    <FormFieldWrapper
      name={props.name}
      errors={errors}
      required={props.required}
    >
      <select {...props}>
        {options.map(({ key, value }) => (
          <option value={value}>{key}</option>
        ))}
      </select>
    </FormFieldWrapper>
  )
}
