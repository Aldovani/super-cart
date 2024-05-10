export type RequestBody = undefined | object
export interface RequestConfig {
  body?: RequestBody
  headers?: Headers
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  path: string
}

export type RequestConfigMethod = Omit<RequestConfig, 'path' | 'method'>

export type HttpResponse<T> = {
  status: number
  ok: boolean
  data: T
}
export type HttpError = {
  status: number
  code: string
  message: string
}
