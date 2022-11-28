import { Request, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'

// Token authantications
export const authorize = (req: Request, res: Response, next: NextFunction) => {
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
          res.status(403).json('Login Error, Please login again')
        }
      } else {
        // token type not bearer
        res.status(403).json('Login Error, Please login again')
      }
    } else {
      // No Token Provided.
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
    // console.log(token)
    const decode = jwt.verify(token, process.env.TOKEN_SECRET as unknown as string) as JwtPayload
    // const userId = decode.user.id
    const userRole = decode.user.admin_flag
    if (userRole == true) {
      // console.log(userId, userRole)
      next()
    } else {
      // the user haven't role admin
      res.status(403).json(`you havn't the role`)
    }
  } catch (error) {
    res.status(401).json(error)
  }
}
