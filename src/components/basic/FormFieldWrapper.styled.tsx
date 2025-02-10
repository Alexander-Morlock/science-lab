import styled, { css } from "styled-components"

export const Wrapper = styled.div`
  margin: 0.2rem 0;
`

export const Subwrapper = styled.div<{ $error?: boolean; $required?: boolean }>`
  position: relative;

  ${({ $required }) =>
    $required &&
    css`
      &::after {
        position: absolute;
        content: "*";
        color: red;
        right: 0;
        top: -1rem;
      }
    `};

  input,
  select {
    width: 100%;
    border: 1px solid ${({ $error }) => ($error ? "red" : "aliceblue")};
  }
`

export const Message = styled.p<{ $error?: boolean }>`
  margin: 0;
  font-size: 0.7rem;
  color: ${({ $error }) => ($error ? "red" : "gray")};
  position: absolute;
  bottom: -1rem;
  left: 0;
`
