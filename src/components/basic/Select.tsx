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
  placeholder?: string
}

export function Select<T extends FieldValues = FieldValues>({
  errors,
  options,
  placeholder,
  ...props
}: Props<T>) {
  return (
    <FormFieldWrapper
      name={props.name}
      errors={errors}
      placeholder={placeholder}
      required={props.required}
    >
      {(setIsPlaceholderMessage) => (
        <select
          {...props}
          ref={(ref) => {
            ref && setIsPlaceholderMessage(true)
          }}
        >
          {options.map(({ key, value }) => (
            <option key={key} value={value}>
              {key}
            </option>
          ))}
        </select>
      )}
    </FormFieldWrapper>
  )
}
