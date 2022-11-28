import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
interface Error {
  status?: number
  name?: string
  message?: string
  stack?: string
}

const handleUnauthorizedError = (next: NextFunction) => {
  const error: Error = new Error('Login Error, Please login again')
  error.status = 403
  next(error)
}

const authorize = (req: Request, _res: Response, next: NextFunction) => {
  try {
    const authHeader = req.get('Authorization')
    if (authHeader) {
      const bearer = authHeader.split(' ')[0].toLowerCase()
      const token = authHeader.split(' ')[1]
      if (token && bearer === 'bearer') {
        const decode = jwt.verify(token, process.env.TOKEN_SECRET as unknown as string)
        if (decode) {
          next()
        } else {
          // Failed to authenticate user.
          handleUnauthorizedError(next)
        }
      } else {
        // token type not bearer
        handleUnauthorizedError(next)
      }
    } else {
      // No Token Provided.
      handleUnauthorizedError(next)
    }
  } catch (err) {
    handleUnauthorizedError(next)
  }
}

export default authorize
