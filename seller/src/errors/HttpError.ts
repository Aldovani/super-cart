type HttpErrorProps = {
  code: string
  status: number
  message: string
}

export class HttpError extends Error {
  code: string
  message: string
  status: number

  constructor({ code, message, status }: HttpErrorProps) {
    super('error')
    this.code = code
    this.message = message
    this.status = status
    this.name = 'HttpError'
  }
}
