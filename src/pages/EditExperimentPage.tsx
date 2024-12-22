import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { apiClient } from "../api/apiClient"
import { Loader } from "../components/Loader.styled"
import { NoContent } from "../components/NoContent"
import { useFetchData } from "../hooks/useFetchData"
import { FieldErrors, useForm } from "react-hook-form"
import { Experiment } from "../api/types"
import { Container } from "../components/basic/Container"
import { useSnackbar } from "../hooks/useSnackbar"
import { SnackbarMessageType } from "../utils/types"
import { Input } from "../components/basic/Input"
import { Section } from "../components/basic/Section"
import { getPageRouteDetails } from "../router/utils"
import { PageNames } from "../router/types"
import { EditExperimentPageForm } from "./EditExperimentPageForm"

export default function EditExperimentPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { showSnackbar } = useSnackbar()
  const [isInitialized, setIsInitialized] = useState(false)

  const { data: experiment, isLoading } = useFetchData(() =>
    apiClient.experiments.get(Number(id))
  )
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<Experiment>()

  useEffect(() => {
    if (!experiment || isInitialized) {
      return
    }
    // fill form with a data from API
    Object.entries(experiment).forEach(([key, value]) =>
      setValue(key as keyof Experiment, value)
    )

    setIsInitialized(true)
  }, [experiment, isInitialized, setValue])

  if (!experiment) {
    return isLoading ? <Loader /> : <NoContent />
  }

  const onSubmit = (data: Experiment) => console.log("SUBMIT -> ", data)

  const onError = (error: FieldErrors<Experiment>) => {
    showSnackbar({
      message: Object.entries(error)
        .map(([fieldName, { type }]) => `${fieldName}: ${type}`)
        .join(", "),
      type: SnackbarMessageType.ERROR,
    })
  }

  return (
    <>
      <h1>{`Experiment "${experiment.title}"`}</h1>
      <Section>
        <EditExperimentPageForm
          onSubmit={handleSubmit(onSubmit, onError)}
          errors={errors}
          register={register}
        />
        <Container>
          <button
            onClick={() =>
              navigate(
                getPageRouteDetails(PageNames.EXPERIMENT_DETAIL).getPath(id)
              )
            }
          >
            Back to details
          </button>
          <button onClick={handleSubmit(onSubmit, onError)}>Submit</button>
          <button
            onClick={(e) => {
              setIsInitialized(false)
              clearErrors()
            }}
          >
            Reset
          </button>
        </Container>
      </Section>
    </>
  )
}
