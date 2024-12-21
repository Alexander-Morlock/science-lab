import express from "express"

const app = express()
const PORT = 3000

app.get("/api/experiments/:experimentId", (req, res) =>
  res.send(
    JSON.stringify({
      id: req.params.experimentId,
      authorId: 123,
      title: "test experiment",
      startDate: "2024-11-01",
      endDate: "2024-12-01",
      responsiblePersonId: 11,
      areasOfExpertiseIds: [1, 2, 3],
      visibility: "PRIVATE",
      state: "PLANNED",
    })
  )
)

app.get("/api/experiments", (req, res) =>
  res.send(
    JSON.stringify(
      [1, 2, 3].map((id) => ({
        id,
        authorId: 123,
        title: `test experiment (id: ${id})`,
        startDate: "2024-11-01",
        endDate: "2024-12-01",
        responsiblePersonId: 11,
        areasOfExpertiseIds: [1, 2, 3],
        visibility: "PRIVATE",
        state: "PLANNED",
      }))
    )
  )
)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
