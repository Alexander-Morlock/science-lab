import React from "react"
import { Form } from "../components/Form"
import { Container } from "../components/basic/Container"
import { useForm } from "react-hook-form"
import { Input } from "../components/basic/Input"
import { useShowSnackbarMessageOnInvalidFormSubmit } from "../hooks/useShowSnackbarMessageOnInvalidFormSubmit"
import { useNavigate } from "react-router"
import { getPageRouteDetails } from "../router/utils"
import { PageNames } from "../router/types"

export default function LoginPage() {
  const navigate = useNavigate()
  const { showSnackbarMessageOnInvalid } =
    useShowSnackbarMessageOnInvalidFormSubmit()

  const {
    register,

    handleSubmit,
    formState: { errors },
  } = useForm<{ login: string; password: string }>()

  const onValid = () => navigate(getPageRouteDetails(PageNames.HOMEPAGE).route)

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
            {...register("login", { required: true })}
            required
          />
          <Input
            type="password"
            errors={errors}
            placeholder="Password"
            {...register("password", { required: true })}
            required
          />
        </Container>
        <button onClick={onSubmit}>Submit</button>
      </Form>
    </Container>
  )
}
