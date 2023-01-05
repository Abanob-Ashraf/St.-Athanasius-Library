import { Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { User, UsersModel } from '../models/users'
import { validationResult } from 'express-validator'

const library = new UsersModel()

// createUser
export const createUser = async (req: Request, res: Response) => {
  try {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const user: User = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      phone_number: req.body.phone_number,
      job: req.body.job,
      admin_flag: req.body.admin_flag || 'false',
      user_status: 'AVILABLE',
      created_date: new Date(),
      updated_date: new Date(),
      id: undefined as unknown as number
    }
    const createdUser = await library.create(user)
    res.status(200).json(createdUser)
  } catch (error) {
    return res.status(400).json('this email already existe')
  }
}

// getManyUsers
export const getManyUsers = async (_req: Request, res: Response) => {
  try {
    const users = await library.getManyUsers()
    return res.status(200).json(users)
  } catch (error) {
    res.status(401).json(error)
  }
}

// getOneUser
export const getOneUser = async (req: Request, res: Response) => {
  try {
    const user = await library.getOneUser(+req.params.id)
    if (typeof user == 'string') {
      return res.status(404).json(user)
    } else {
      return res.json(user)
    }
  } catch (error) {
    res.status(401).json(error)
  }
}

export const searchForUser = async (req: Request, res: Response) => {
  try {
    const user = await library.searchForUser(
      req.query.first_name as string,
      req.query.last_name as string,
      req.query.email as string,
      req.query.job as string
    )
    if (typeof user == 'string') {
      return res.status(404).json(user)
    } else {
      return res.json(user)
    }
  } catch (error) {
    res.status(401).json(error)
  }
}

// getOneUser
export const getMine = async (req: Request, res: Response) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '') as string
    const decode = jwt.verify(token, process.env.TOKEN_SECRET as unknown as string) as JwtPayload
    const userId = decode.user.id

    const user = await library.getOneUser(+userId)
    return res.json(user)
  } catch (error) {
    res.status(401).json(error)
  }
}

// updateUser
export const updateUser = async (req: Request, res: Response) => {
  try {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const token = req.header('Authorization')?.replace('Bearer ', '') as string
    const decode = jwt.verify(token, process.env.TOKEN_SECRET as unknown as string) as JwtPayload
    const userId = decode.user.id
    const userRole = decode.user.admin_flag

    if (userId == +req.params.id || userRole == true) {
      const user = {
        id: +req.params.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        phone_number: req.body.phone_number,
        job: req.body.job,
        admin_flag: req.body.admin_flag || 'false',
        user_status: 'AVILABLE',
        created_date: new Date(),
        updated_date: new Date()
      }

      const updateUser = await library.updateUser(user)
      if (typeof updateUser == 'string') {
        return res.status(404).json(updateUser)
      }
    } else {
      return res.status(400).json('you have not the role')
    }
  } catch (error) {
    res.status(401).json(error)
  }
}

// deleteUser
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '') as string
    const decode = jwt.verify(token, process.env.TOKEN_SECRET as unknown as string) as JwtPayload
    const userId = decode.user.id
    const deletedUser = await library.deleteUser(
      +userId,
      +req.params.id,
      'NOT AVILABLE',
      new Date()
    )
    if (typeof deletedUser == 'string') {
      return res.status(400).json(deletedUser)
    } else {
      return res.json('user deleted correctly')
    }
  } catch (error) {
    res.status(403).json(error)
  }
}

// authenticateUser
export const authenticateUser = async (req: Request, res: Response) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(401).json('missing or malformed parameters. email, password required')
  }
  try {
    const user = await library.authenticate(email, password)
    const token = jwt.sign({ user }, process.env.TOKEN_SECRET as unknown as string, {
      expiresIn: process.env.JWT_EXPIRES_IN
    })
    if (!user) {
      return res.status(401).json('the username and password do not match please try again')
    }
    if (user['user_status'] == 'NOT AVILABLE') {
      return res.status(401).json('you can not login contact with admin')
    }
    return res.json({ ...user, token })
  } catch (error) {
    res.status(401).json(error)
  }
}

// getAllUnAvilableUsers
export const getAllUnAvilableUsers = async (_req: Request, res: Response) => {
  try {
    const users = await library.getAllUnAvilableUsers()
    if (users == null) {
      return res.status(404).json('no users UnAvilable')
    }
    return res.status(200).json(users)
  } catch (error) {
    res.status(401).json(error)
  }
}
