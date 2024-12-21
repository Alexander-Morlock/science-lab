import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
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
import { useDeviceType } from "../hooks/useDeviceType"

export default function EditExperimentPage() {
  const { id } = useParams()
  const { isMobile, isTablet } = useDeviceType()
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

  const getColumns = () => {
    if (isMobile) {
      return 1
    }
    if (isTablet) {
      return 2
    }
    return 3
  }

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
      <h1>{`EditExperimentPage id:${id}`}</h1>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Container columns={getColumns()}>
          <Input
            type="text"
            errors={errors}
            placeholder="Author Id"
            {...register("authorId", { required: true })}
            required
          />
          <Input
            type="text"
            errors={errors}
            placeholder="Title"
            {...register("title", { required: true })}
            required
          />
          <Input
            type="text"
            errors={errors}
            placeholder="Start date"
            {...register("startDate", { required: true })}
            required
          />
          <Input
            type="text"
            errors={errors}
            placeholder="End date"
            {...register("endDate", { required: true })}
            required
          />
          <Input
            type="text"
            errors={errors}
            placeholder="Responsible Person Id"
            {...register("responsiblePersonId", { required: true })}
            required
          />
          <Input
            type="text"
            errors={errors}
            placeholder="Areas Of Expertise Ids"
            {...register("areasOfExpertiseIds", { required: true })}
            required
          />
          <Input
            type="text"
            errors={errors}
            placeholder="Visibility"
            {...register("visibility", { required: true })}
            required
          />
          <Input
            type="text"
            errors={errors}
            placeholder="State"
            {...register("state", { required: true })}
            required
          />
          <Input
            type="text"
            errors={errors}
            placeholder="State mark"
            {...register("stateMark")}
          />
          <Input
            type="text"
            errors={errors}
            placeholder="Description"
            {...register("description")}
          />
          <Input
            type="text"
            errors={errors}
            placeholder="Purpose"
            {...register("purpose")}
          />
          <Input
            type="text"
            errors={errors}
            placeholder="Expected Results"
            {...register("expectedResults")}
          />
          <Input
            type="text"
            errors={errors}
            placeholder="Actual Results"
            {...register("actualResults")}
          />
          <Input
            type="text"
            errors={errors}
            placeholder="Conclusion"
            {...register("conclusion")}
          />
          <Input
            type="text"
            errors={errors}
            placeholder="EquipmentIds"
            {...register("equipmentIds")}
          />
          <Input
            type="text"
            errors={errors}
            placeholder="Participant Ids"
            {...register("participantIds")}
          />
        </Container>
        <Container>
          <button type="submit">Submit</button>
          <button
            type="reset"
            onClick={(e) => {
              e.preventDefault()
              setIsInitialized(false)
              clearErrors()
            }}
          >
            Reset
          </button>
        </Container>
      </form>
    </>
  )
}
