import React, { PropsWithChildren } from "react"
import { ApplicationHeader } from "./ApplicationHeader"
import { ApplicationFooter } from "./ApplicationFooter"
import * as Styled from "./ApplicationLayout.styled"
import { useSnackbar } from "../../hooks/useSnackbar"

export function ApplicationLayout({ children }: PropsWithChildren) {
  const { snackbar } = useSnackbar()

  return (
    <Styled.Layout>
      <ApplicationHeader />
      <Styled.PageContentContainer>
        <>
          {!!snackbar?.message && (
            <Styled.Snackbar $type={snackbar.type}>
              {snackbar.message}
            </Styled.Snackbar>
          )}
          {children}
        </>
      </Styled.PageContentContainer>
      <ApplicationFooter />
    </Styled.Layout>
  )
}
