import React, { useEffect } from "react"
import { Loader } from "../components/Loader"
import { apiClient } from "../api/apiClient"
import { useFetchData } from "../hooks/useFetchData"

/** Impossible scenario.
 * Backend shouldn't start React App for non-authorized user, so this page is normally unreachable.
 * Just to be sure */
export default function LoginPage() {
  const { data: loginPageHtml, isLoading } = useFetchData(
    apiClient.user.getLoginPageHTML,
    { autofetch: true }
  )

  const rootHtmlElement = document.querySelector("html")

  useEffect(() => {
    if (!rootHtmlElement || isLoading || !loginPageHtml) {
      return
    }

    rootHtmlElement.innerHTML = loginPageHtml
  }, [isLoading, loginPageHtml, rootHtmlElement])

  if (isLoading) {
    return <Loader />
  }

  return <></>
}
