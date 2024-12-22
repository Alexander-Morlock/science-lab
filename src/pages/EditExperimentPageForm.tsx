import React, { FormEventHandler } from "react"
import { Input } from "../components/basic/Input"
import { Container } from "../components/basic/Container"
import { FieldErrors, UseFormRegister } from "react-hook-form"
import { Experiment } from "../api/types"

type Props = {
  errors: FieldErrors<Experiment>
  register: UseFormRegister<Experiment>
  onSubmit?: FormEventHandler<HTMLFormElement> | undefined
}

export function EditExperimentPageForm({ onSubmit, register, errors }: Props) {
  return (
    <form onSubmit={onSubmit}>
      <Container autoColumns>
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
    </form>
  )
}
