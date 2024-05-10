import { API_BASE_URL } from '@/constants'
import { HttpError } from '@/errors/HttpError'
import {
  HttpResponse,
  RequestBody,
  RequestConfig,
  RequestConfigMethod,
} from '@/types/http'

import { HTTPClient } from '../../httpClient'

export class FetchHttpClient implements HTTPClient {
  baseUrl: string
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async request<T>({
    body,
    headers,
    method,
    path,
  }: RequestConfig): Promise<HttpResponse<T>> {
    const config = { headers, method, body: '' }

    if (body) {
      config.body = JSON.stringify(body)
    }

    const urlRequest = this.baseUrl + path
    const request = await fetch(urlRequest, {
      ...config,
      headers: {
        'content-type': 'application/json',
      },
    })
    const response = await request.json()

    if (request.ok) {
      return { data: response, ok: request.ok, status: request.status }
    }

    throw new HttpError({
      code: response.code || response.errors[0].message,
      message: response.message,
      status: request.status,
    })
  }

  async get<T>(
    path: string,
    config?: RequestConfigMethod,
  ): Promise<HttpResponse<T>> {
    const data = await this.request<T>({
      method: 'GET',
      path,
      ...config,
    })
    return { ...data }
  }

  async post<T>(
    path: string,
    body: RequestBody,
    config?: Omit<RequestConfigMethod, 'body'>,
  ) {
    const { data, ok, status } = await this.request<T>({
      method: 'POST',
      path,
      body,
      ...config,
    })
    console.log({ data })
    return { data, ok, status }
  }

  async put<T>(
    path: string,
    body: RequestBody,
    config?: Omit<RequestConfigMethod, 'body'>,
  ): Promise<HttpResponse<T>> {
    const data = await this.request<T>({ method: 'PUT', path, body, ...config })
    return { ...data }
  }

  async delete<T>(
    path: string,
    config?: RequestConfigMethod,
  ): Promise<HttpResponse<T>> {
    const data = await this.request<T>({ method: 'DELETE', path, ...config })
    return data
  }
}

export const fetchHttpClient = new FetchHttpClient(API_BASE_URL)
