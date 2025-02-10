import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react"
import { FieldErrors, FieldValues } from "react-hook-form"
import { FormFieldWrapper } from "./FormFieldWrapper"

type Props<T extends FieldValues> = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  errors: FieldErrors<T>
  required?: boolean
  showPlaceholder?: boolean
}

export function Input<T extends FieldValues>({
  errors,
  showPlaceholder,
  ...props
}: Props<T>) {
  const [isPlaceholder, setIsPlaceholder] = useState(false)

  useEffect(() => {
    if (showPlaceholder === undefined) {
      return
    }
    setIsPlaceholder(showPlaceholder)
  }, [showPlaceholder])

  return (
    <FormFieldWrapper
      name={props.name}
      errors={errors}
      required={props.required}
      showPlaceholder={isPlaceholder}
      placeholder={props.placeholder}
      input={(setIsPlaceholderMessage) => (
        <input
          {...props}
          onInput={(event) =>
            setIsPlaceholderMessage(!!event.currentTarget.value.length)
          }
        />
      )}
    />
  )
}
