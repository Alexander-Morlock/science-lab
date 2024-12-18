import React, { PropsWithChildren } from "react"
import { ApplicationHeader } from "./ApplicationHeader"
import { ApplicationFooter } from "./ApplicationFooter"
import * as Styled from "./ApplicationLayout.styled"
import { useSnackbar } from "../../hooks/useSnackbar"

export function ApplicationLayout({ children }: PropsWithChildren) {
  const { message } = useSnackbar()

  return (
    <Styled.Layout>
      <ApplicationHeader />
      <Styled.PageContentContainer>
        <>
          {!!message && <Styled.Snackbar>{message}</Styled.Snackbar>}
          {children}
        </>
      </Styled.PageContentContainer>
      <ApplicationFooter />
    </Styled.Layout>
  )
}
