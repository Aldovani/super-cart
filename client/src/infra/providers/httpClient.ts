import { HttpError as HttpErrorClass } from '@/errors/HttpError'
import {
  HttpResponse,
  RequestBody,
  RequestConfig,
  RequestConfigMethod,
} from '@/types/http'

export interface HTTPClient {
  baseUrl: string
  request<T>(params: RequestConfig): Promise<HttpResponse<T>>
  get<T>(
    path: string,
    config?: RequestConfigMethod,
  ): Promise<HttpResponse<T> | HttpErrorClass>
  put<T>(
    path: string,
    body: RequestBody,
    config?: Omit<RequestConfigMethod, 'body'>,
  ): Promise<HttpResponse<T>>
  post<T>(
    path: string,
    body: RequestBody,
    config?: Omit<RequestConfigMethod, 'body'>,
  ): Promise<HttpResponse<T>>
  delete<T>(
    path: string,
    config?: RequestConfigMethod,
  ): Promise<HttpResponse<T>>
}
