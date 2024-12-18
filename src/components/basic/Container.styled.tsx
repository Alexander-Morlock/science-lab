import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid aliceblue;

  & > *:first-child {
    margin-top: 0;
    padding-top: 0;
  }
`
