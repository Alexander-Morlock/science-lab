import React, { HtmlHTMLAttributes, PropsWithChildren } from "react"
import * as Styled from "./Container.styled"

type Props = {
  colorizeBackgroundColorOnHover?: boolean
}

export function Container({
  colorizeBackgroundColorOnHover,
  children,
  ...props
}: PropsWithChildren<Props & HtmlHTMLAttributes<HTMLDivElement>>) {
  return (
    <Styled.Container
      {...props}
      $colorizeBackgroundColorOnHover={colorizeBackgroundColorOnHover}
    >
      {children}
    </Styled.Container>
  )
}
