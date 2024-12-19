import React, { useState } from "react"
import { Form } from "../components/Form"
import { Container } from "../components/basic/Container"
import { useSnackbar } from "../hooks/useSnackbar"
import { SnackbarMessageType } from "../utils/types"

export default function LoginPage() {
  const { showSnackbar } = useSnackbar()
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  const isDataIncorrect = !login.length || !password.length
  const isSubmitButtonDisabled = !login.length && !password.length

  return (
    <Container>
      <p>Please log in</p>
      <Form
        onSubmit={() =>
          showSnackbar(
            isDataIncorrect
              ? {
                  message: "Data is incorrect",
                  type: SnackbarMessageType.ERROR,
                }
              : {
                  message: `Login [${login}] and password [${password}] are submitted!`,
                }
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
        <button type="submit" disabled={isSubmitButtonDisabled}>
          Submit
        </button>
      </Form>
    </Container>
  )
}
