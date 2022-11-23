import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { User, UsersModel } from '../models/users'

const library = new UsersModel()

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user: User = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      admin_flag: req.body.admin_flag,
      created_date: new Date(),
      updated_date: new Date(),
      id: undefined as unknown as number
    }

    const newUser = await library.create(user)
    res.json({
      status: 'success',
      data: { ...newUser },
      message: 'User created successfully'
    })
  } catch (error) {
    next(error)
  }
}

export const getManyUsers = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await library.getManyUsers()
    res.json({
      status: 'success',
      data: users,
      message: 'Users retrieved successfully'
    })
  } catch (error) {
    next(error)
  }
}

export const getOneUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await library.getOneUser(+req.params.id)
    res.json({
      status: 'success',
      data: user,
      message: 'User retrieved successfully'
    })
  } catch (error) {
    next(error)
  }
}
export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = {
      id: +req.params.id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      admin_flag: req.body.admin_flag,
      created_date: new Date(),
      updated_date: new Date()
    }

    const updated = await library.update(user)
    res.json({
      status: 'success',
      data: updated,
      message: 'User updated successfully'
    })
  } catch (error) {
    next(error)
  }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deletedUser = await library.delete(+req.params.id)
    res.json({
      status: 'success',
      data: deletedUser,
      message: 'User deleted successfully'
    })
  } catch (error) {
    next(error)
  }
}

export const authenticateUser = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(401).json({
      status: 'error',
      message: 'missing or malformed parameters. email, password required'
    })
  }

  try {
    const user = await library.authenticate(email, password)
    const token = jwt.sign({ user }, process.env.TOKEN_SECRET as unknown as string)
    if (!user) {
      return res.status(401).json({
        status: 'error',
        message: 'the username and password do not match please try again'
      })
    }
    return res.json({
      status: 'success',
      data: { ...user, token },
      message: 'user authenticated successfully'
    })
  } catch (err) {
    return next(err)
  }
}

export const getAllDeletedUsers = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await library.getAllDeletedUsers()
    res.json({
      status: 'success',
      data: users,
      message: 'Deleted Users retrieved successfully'
    })
  } catch (error) {
    next(error)
  }
}
