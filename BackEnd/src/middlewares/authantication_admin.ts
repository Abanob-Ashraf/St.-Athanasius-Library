import { Request, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'

// Token authantications
export const authorize = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '') as string
    const decode = jwt.verify(token, process.env.TOKEN_SECRET as unknown as string)
    if (decode) {
      next()
    } else {
      // Failed to authenticate user.
      res.status(403).json('Login Error, Please login again')
    }
  } catch (error) {
    res.status(401).json(error)
  }
}

// admin verifications
export const admin = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '') as string
    const decode = jwt.verify(token, process.env.TOKEN_SECRET as unknown as string) as JwtPayload
    const userRole = decode.user.admin_flag
    if (userRole == true) {
      next()
    } else {
      // the user haven't role admin
      res.status(403).json(`you havn't the role`)
    }
  } catch (error) {
    res.status(401).json(error)
  }
}
