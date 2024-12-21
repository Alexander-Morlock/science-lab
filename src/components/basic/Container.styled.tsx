import styled, { css } from "styled-components"

export const Container = styled.div<{
  $colorizeBackgroundColorOnHover?: boolean
  $centered?: boolean
  $columns?: number
}>`
  display: flex;
  flex-direction: column;
  ${({ $columns }) =>
    $columns &&
    css`
      display: grid;
      grid-template-columns: repeat(${$columns}, 1fr);
      grid-column-gap: 1rem;
      grid-row-gap: 1rem;
    `}
  ${({ $centered }) =>
    $centered
      ? css`
          margin: auto;
        `
      : css`
          margin: 1rem 0 0 0;
          flex-grow: 1;
        `};
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
