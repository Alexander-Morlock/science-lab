import styled, { css } from "styled-components"

export const Wrapper = styled.div<{
  $colorizeBackgroundColorOnHover?: boolean
  $centered?: boolean
  $noPadding?: boolean
  $columns?: number
}>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${({ $noPadding }) =>
    !$noPadding &&
    css`
      padding: 1rem;
      border-radius: 0.5rem;
      border: 1px solid aliceblue;
    `}

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
          margin: 0;
          flex-grow: 1;
        `};

  ${({ $colorizeBackgroundColorOnHover }) =>
    $colorizeBackgroundColorOnHover &&
    css`
      &:hover {
        cursor: pointer;
        background-color: aliceblue;
      }
    `}
`
