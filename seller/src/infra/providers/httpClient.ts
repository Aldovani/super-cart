export type RequestBody = undefined | object
export interface RequestConfig {
  body?: RequestBody
  headers?: Headers
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  path: string
}

export type RequestConfigMethod = Omit<RequestConfig, 'path' | 'method'>

export interface HttpClient {
  baseUrl: string
  request<T>(params: RequestConfig): Promise<T>
  get<T>(path: string, config?: RequestConfigMethod): Promise<T>
  put<T>(
    path: string,
    body: RequestBody,
    config?: Omit<RequestConfigMethod, 'body'>,
  ): Promise<T>
  post<T>(
    path: string,
    body: RequestBody,
    config?: Omit<RequestConfigMethod, 'body'>,
  ): Promise<T>
  delete<T>(path: string, config?: RequestConfigMethod): Promise<T>
}
