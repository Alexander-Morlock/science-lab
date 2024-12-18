import React, { PropsWithChildren } from "react"
import { ApplicationHeader } from "./ApplicationHeader"
import { ApplicationFooter } from "./ApplicationFooter"
import * as Styled from "./ApplicationLayout.styled"

export function ApplicationLayout({ children }: PropsWithChildren) {
  return (
    <Styled.Layout>
      <ApplicationHeader />
      <Styled.PageContentContainer>{children}</Styled.PageContentContainer>
      <ApplicationFooter />
    </Styled.Layout>
  )
}
