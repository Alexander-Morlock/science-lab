import React, { useState } from "react"
import { Form } from "../components/Form"
import { Container } from "../components/basic/Container"
import { useSnackbar } from "../hooks/useSnackbar"

export default function LoginPage() {
  const { showMessage } = useSnackbar()
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  return (
    <Container>
      <p>Please log in</p>
      <Form
        onSubmit={() =>
          showMessage(
            `Login [${login}] and password [${password}] are submitted!`
          )
        }
      >
        <input
          type="text"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.currentTarget.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <button type="submit">Submit</button>
      </Form>
    </Container>
  )
}
