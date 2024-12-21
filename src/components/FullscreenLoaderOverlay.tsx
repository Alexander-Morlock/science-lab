import React from "react"
import * as Styled from "./FullscreenLoaderOverlay.styled"

export function FullscreenLoaderOverlay() {
  return (
    <Styled.Overlay>
      <Styled.Loader>...Loading</Styled.Loader>
    </Styled.Overlay>
  )
}
