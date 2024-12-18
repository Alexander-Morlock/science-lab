import React, { HtmlHTMLAttributes, PropsWithChildren } from "react"
import * as Styled from "./Container.styled"

export function Container({
  children,
}: PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>>) {
  return <Styled.Container>{children}</Styled.Container>
}
