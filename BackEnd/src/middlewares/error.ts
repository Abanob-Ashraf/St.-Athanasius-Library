/* eslint-disable @typescript-eslint/no-unused-vars */
import { Response, Request, NextFunction } from 'express'

export interface Error {
  status?: number
  name?: string
  message?: string
  stack?: string
}

const errorMiddleware = (error: Error, _req: Request, res: Response, next: NextFunction) => {
  const status = error.status || 500
  const message = error.message || 'somthing went wrong'
  res.status(status).json({ status, message })
}

export default errorMiddleware
