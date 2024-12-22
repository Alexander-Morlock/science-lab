import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
} from "react"
import * as Styled from "./Section.styled"

type Props = PropsWithChildren<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLInputElement>
>

export function Section({ children, ...props }: Props) {
  return <Styled.Section {...props}>{children}</Styled.Section>
}
