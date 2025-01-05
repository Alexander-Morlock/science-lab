import React from "react"

export default function NotFoundPage() {
  fetch("/login")
    .then((res) => res.json())
    .then((res) => console.log(res))
  return <h1>404: PageNotFound</h1>
}
