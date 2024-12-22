import styled, { css } from "styled-components"

export const Wrapper = styled.div<{ $error?: boolean; $required?: boolean }>`
  position: relative;

  ${({ $required }) =>
    $required &&
    css`
      &::after {
        position: absolute;
        content: "*";
        color: red;
        right: -0.5rem;
        top: -1rem;
      }
    `};

  input {
    width: 100%;
    border: 1px solid ${({ $error }) => ($error ? "red" : "aliceblue")};
  }
`

export const Error = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: red;
  position: absolute;
  bottom: -1rem;
  left: 0;
`
