import React, { PropsWithChildren } from "react"
import { Container } from "./basic/Container"

type Props = PropsWithChildren<{
  onCancel?: () => void
  onSubmit: () => void
  onReset?: () => void
  onDelete?: () => void
}>

export function FormPageFooter({
  onCancel,
  onSubmit,
  onReset,
  onDelete,
}: Props) {
  return (
    <Container>
      {onCancel && <button onClick={onCancel}>Cancel</button>}
      <button onClick={onSubmit}>Submit</button>
      {onReset && <button onClick={onReset}>Reset</button>}
      {onDelete && <button onClick={onDelete}>Delete</button>}
    </Container>
  )
}
