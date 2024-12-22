import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { apiClient } from "../api/apiClient"
import { Loader } from "../components/Loader.styled"
import { NoContent } from "../components/NoContent"
import { useFetchData } from "../hooks/useFetchData"
import { useForm } from "react-hook-form"
import { Experiment } from "../api/types"
import { Container } from "../components/basic/Container"
import { Section } from "../components/basic/Section"
import { getPageRouteDetails } from "../router/utils"
import { PageNames } from "../router/types"
import { EditExperimentPageForm } from "./EditExperimentPageForm"
import { ExperimentTitle } from "../components/ExperimentTitle"
import { useShowSnackbarMessageOnInvalidFormSubmit } from "../hooks/useShowSnackbarMessageOnInvalidFormSubmit"

export default function EditExperimentPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { showSnackbarMessageOnInvalid } =
    useShowSnackbarMessageOnInvalidFormSubmit()

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
    // fill form with a data from API once
    Object.entries(experiment).forEach(([key, value]) =>
      setValue(key as keyof Experiment, value)
    )

    setIsInitialized(true)
  }, [experiment, isInitialized, setValue])

  if (!experiment) {
    return isLoading ? <Loader /> : <NoContent />
  }

  const onValid = (data: Experiment) => console.log("SUBMIT -> ", data)
  const onSubmit = handleSubmit(onValid, showSnackbarMessageOnInvalid)
  const onReset = () => {
    setIsInitialized(false)
    clearErrors()
  }

  return (
    <>
      <ExperimentTitle title={experiment.title} />
      <Section>
        <EditExperimentPageForm
          onSubmit={onSubmit}
          register={register}
          errors={errors}
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
          <button onClick={onSubmit}>Submit</button>
          <button onClick={onReset}>Reset</button>
        </Container>
      </Section>
    </>
  )
}
