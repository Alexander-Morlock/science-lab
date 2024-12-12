import React, { PropsWithChildren } from "react"

export function ApplicationLayout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <header>
        <h3>APPLICATION HEADER</h3>
      </header>
      {children}
      <footer>
        <h3>APPLICATION FOOTER</h3>
      </footer>
    </>
  )
}
