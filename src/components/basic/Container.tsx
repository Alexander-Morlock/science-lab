import React, { HtmlHTMLAttributes, PropsWithChildren } from "react"
import * as Styled from "./Container.styled"

type Props = {
  columns?: number
  centered?: boolean
  colorizeBackgroundColorOnHover?: boolean
}

export function Container({
  columns,
  centered,
  colorizeBackgroundColorOnHover,
  children,
  ...props
}: PropsWithChildren<Props & HtmlHTMLAttributes<HTMLDivElement>>) {
  return (
    <Styled.Container
      {...props}
      $columns={columns}
      $centered={centered}
      $colorizeBackgroundColorOnHover={colorizeBackgroundColorOnHover}
    >
      {children}
    </Styled.Container>
  )
}
