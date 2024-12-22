import React from "react"

type Header = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

type Props = {
  title?: string
  headerLevel?: 1 | 2 | 3 | 4 | 5 | 6
}

export function ExperimentTitle({ title, headerLevel }: Props) {
  const HeaderComponent = `h${headerLevel ?? 1}` as Header

  return (
    <HeaderComponent>
      {title ? `Experiment ${title}` : "Creating new experiment"}
    </HeaderComponent>
  )
}
