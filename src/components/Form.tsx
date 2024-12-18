import React, { FormHTMLAttributes, PropsWithChildren } from "react"
import * as Styled from "./Form.styled"

export function Form({
  children,
  ...props
}: PropsWithChildren<FormHTMLAttributes<HTMLFormElement>>) {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.onSubmit?.(e)
  }

  return (
    <Styled.Form {...props} onSubmit={onSubmit}>
      {children}
    </Styled.Form>
  )
}
