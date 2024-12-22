import React from "react"
import { Form } from "../components/Form"
import { Container } from "../components/basic/Container"
import { useSnackbar } from "../hooks/useSnackbar"
import { useForm } from "react-hook-form"
import { Input } from "../components/basic/Input"
import { useShowSnackbarMessageOnInvalidFormSubmit } from "../hooks/useShowSnackbarMessageOnInvalidFormSubmit"

export default function LoginPage() {
  const { showSnackbar } = useSnackbar()
  const { showSnackbarMessageOnInvalid } =
    useShowSnackbarMessageOnInvalidFormSubmit()

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<{ login: string; password: string }>()

  const onValid = () => {
    const { login, password } = getValues()
    showSnackbar({
      message: `Login [${login}] and password [${password}] are submitted!`,
    })
  }

  const onSubmit = handleSubmit(onValid, showSnackbarMessageOnInvalid)

  return (
    <Container centered>
      <p>Please log in</p>
      <Form onSubmit={onSubmit}>
        <Container>
          <Input
            type="text"
            errors={errors}
            placeholder="Login"
            {...register("login", { required: true, minLength: 3 })}
            required
          />
          <Input
            type="password"
            errors={errors}
            placeholder="Password"
            {...register("password", { required: true, minLength: 3 })}
            required
          />
        </Container>
        <button onClick={onSubmit}>Submit</button>
      </Form>
    </Container>
  )
}
