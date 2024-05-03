import { API_BASE_URL } from '@/constants'

import {
  HttpClient,
  RequestBody,
  RequestConfig,
  RequestConfigMethod,
} from '../../httpClient'

export class FetchHttpClient implements HttpClient {
  baseUrl: string
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async request<T>({ body, headers, method, path }: RequestConfig): Promise<T> {
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
    return response
  }

  async get<T>(path: string, config?: RequestConfigMethod): Promise<T> {
    const data = await this.request<T>({
      method: 'GET',
      path,
      ...config,
    })
    return data
  }

  async post<T>(
    path: string,
    body: RequestBody,
    config?: Omit<RequestConfigMethod, 'body'>,
  ): Promise<T> {
    const data = await this.request<T>({
      method: 'POST',
      path,
      body,
      ...config,
    })
    return data
  }

  async put<T>(
    path: string,
    body: RequestBody,
    config?: Omit<RequestConfigMethod, 'body'>,
  ): Promise<T> {
    const data = await this.request<T>({ method: 'PUT', path, body, ...config })
    return data
  }

  async delete<T>(path: string, config?: RequestConfigMethod): Promise<T> {
    const data = await this.request<T>({ method: 'DELETE', path, ...config })
    return data
  }
}

export const fetchHttpClient = new FetchHttpClient(API_BASE_URL)
