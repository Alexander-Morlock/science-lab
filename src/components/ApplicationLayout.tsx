import React, { PropsWithChildren } from "react"
import { DebugUserSwitcher } from "./DebugUserSwitcher"

export function ApplicationLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header>
        <h3>APPLICATION HEADER</h3>
        <DebugUserSwitcher />
      </header>
      {children}
      <footer>
        <h3>APPLICATION FOOTER</h3>
      </footer>
    </>
  )
}
