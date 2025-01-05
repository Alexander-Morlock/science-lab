import express from "express"

const app = express()
const PORT = process.env.PORT || 3001

app.get("/api/experiments", (req, res) =>
  res.send(
    JSON.stringify(
      [1, 2, 3].map((id) => ({
        id,
        authorId: 1,
        title: `test experiment (id: ${id})`,
        startDate: "2024-11-01",
        endDate: "2024-12-01",
        responsiblePersonId: 1,
        areasOfExpertiseIds: [1, 2, 3],
        visibility: "PRIVATE",
        state: "PLANNED",
      }))
    )
  )
)

app.get("/api/experiments/:experimentId", (req, res) =>
  res.send(
    JSON.stringify({
      id: req.params.experimentId,
      authorId: 1,
      title: "test experiment",
      startDate: "2024-11-01",
      endDate: "2024-12-01",
      responsiblePersonId: 2,
      areasOfExpertiseIds: [1, 2, 4],
      visibility: "PRIVATE",
      state: "PLANNED",
    })
  )
)

app.put("/api/experiments/:id", (req, res) => {
  res.send(JSON.stringify({ id: req.params.id }))
})

app.delete("/api/experiments/:id", (req, res) => {
  res.send(JSON.stringify({ id: req.params.id }))
})

app.post("/api/experiments/", (req, res) => {
  res.send(JSON.stringify({ id: 1 }))
})

app.get("/api/users", (req, res) =>
  res.send(
    JSON.stringify(
      [1, 2, 3].map((id) => ({
        id,
        name: `User id${id}`,
        email: `email-${id}@email.cz`,
        role: "GUEST",
      }))
    )
  )
)

app.get("/api/areasOfExpertise", (req, res) =>
  res.send(
    JSON.stringify(
      [1, 2, 3, 4, 5, 6].map((id) => ({
        id,
        name: `Area of expertise id${id}`,
      }))
    )
  )
)

app.get("/api/areasOfExpertise/:id", (req, res) => {
  res.send(
    JSON.stringify({
      id: req.params.id,
      name: `Area of expertise id:${req.params.id}`,
    })
  )
})

app.post("/api/areasOfExpertise", (req, res) =>
  res.send(JSON.stringify({ id: 1 }))
)

app.put("/api/areasOfExpertise/:id", (req, res) => {
  res.send(JSON.stringify({ id: req.params.id }))
})

app.delete("/api/areasOfExpertise/:id", (req, res) => {
  res.send(JSON.stringify({ id: req.params.id }))
})

app.get("/api/equipment", (req, res) =>
  res.send(
    JSON.stringify(
      [1, 2, 3, 4, 5, 6].map((id) => ({
        id,
        name: `Equipment id${id}`,
        amount: 2,
        experiments: [
          {
            id: 1,
            authorId: 1,
            title: "test experiment",
            startDate: "2024-11-01",
            endDate: "2024-12-01",
            responsiblePersonId: 2,
            areasOfExpertiseIds: [1, 2, 4],
            visibility: "PRIVATE",
            state: "PLANNED",
          },
        ],
      }))
    )
  )
)

app.get("/api/equipment/:id", (req, res) =>
  res.send({
    id: req.params.id,
    name: `Equipment id${req.params.id}`,
    amount: 2,
    experiments: [
      {
        id: 1,
        authorId: 1,
        title: "test experiment",
        startDate: "2024-11-01",
        endDate: "2024-12-01",
        responsiblePersonId: 2,
        areasOfExpertiseIds: [1, 2, 4],
        visibility: "PRIVATE",
        state: "PLANNED",
      },
    ],
  })
)

app.put("/api/equipment/:id", (req, res) =>
  res.send({
    id: req.params.id,
  })
)
app.delete("/api/equipment/:id", (req, res) =>
  res.send({
    id: req.params.id,
  })
)

app.post("/api/equipment", (req, res) =>
  res.send({
    id: 111,
  })
)

app.get("/api/users/role", (req, res) => {
  // res.send("GUEST")
  // res.send("LAB_TECHNICIAN")
  // res.send("SCIENTIST")
  res.send("ADMIN")
  // res.status(403).send("NOT AUTHORIZED")
})

app.get("/login", (req, res) => {
  res.send("<html><body><p>LOGIN-PAGE-HTML</p></body></html>")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
