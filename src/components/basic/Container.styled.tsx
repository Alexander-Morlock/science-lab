import styled, { css } from "styled-components"

export const Container = styled.div<{
  $colorizeBackgroundColorOnHover?: boolean
}>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: auto;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid aliceblue;
  ${({ $colorizeBackgroundColorOnHover }) =>
    $colorizeBackgroundColorOnHover &&
    css`
      &:hover {
        cursor: pointer;
        background-color: aliceblue;
      }
    `}

  & > *:first-child {
    margin-top: 0;
    padding-top: 0;
  }
`
