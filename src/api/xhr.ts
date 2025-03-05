import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

type Xhr = {
  get<T = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<T>

  post<T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<T>

  put<T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<T>

  patch<T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<T>

  delete<T = any, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<T>
}

async function overrideAxiosResponse<T>(
  request: Promise<AxiosResponse<T>>,
  responseField: keyof AxiosResponse<T> = "data"
) {
  const response = await request
  return response[responseField]
}

export const xhr: Xhr = {
  get: <T, D>(url: string, config?: AxiosRequestConfig<D>) =>
    overrideAxiosResponse<T>(axios.get(url, config)),

  post: <T, D>(url: string, data?: D, config?: AxiosRequestConfig<D>) =>
    overrideAxiosResponse<T>(axios.post(url, data, config)),

  put: <T, D>(url: string, data?: D, config?: AxiosRequestConfig<D>) =>
    overrideAxiosResponse<T>(axios.put(url, data, config)),

  patch: <T, D>(url: string, data?: D, config?: AxiosRequestConfig<D>) =>
    overrideAxiosResponse<T>(axios.patch(url, data, config)),

  delete: <T, D>(url: string, config?: AxiosRequestConfig<D>) =>
    overrideAxiosResponse<T>(axios.delete(url, config)),
}
