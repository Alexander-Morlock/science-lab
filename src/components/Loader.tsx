import React from "react"
import * as Styled from "./Loader.styled"

export function Loader() {
  return (
    <Styled.Overlay>
      <Styled.Loader>...Loading</Styled.Loader>
    </Styled.Overlay>
  )
}
