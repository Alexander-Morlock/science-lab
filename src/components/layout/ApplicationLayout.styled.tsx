import styled, { css } from "styled-components"

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const sharedHeaderFooterStyles = css`
  padding: 1rem;
  background-color: aliceblue;
  color: gray;
`

export const Header = styled.header`
  ${sharedHeaderFooterStyles}

  a {
    color: gray;

    &:hover {
      color: black;
    }

    &.active {
      text-decoration: none;
      cursor: default;
      &:hover {
        color: gray;
      }
    }
  }
`

export const HeaderNavigationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    position: relative;

    &:not(:last-child)::before {
      position: absolute;
      top: 0;
      right: -0.6rem;
      content: "|";
    }
  }
`

export const Footer = styled.footer`
  ${sharedHeaderFooterStyles}
`

export const PageContentContainer = styled.div`
  padding: 1rem;
  flex-grow: 1;
`
