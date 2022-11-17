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
    const token = jwt.sign(newUser, process.env.TOKEN_SECRET as string)
    res.json({
      status: 'success',
      data: { ...newUser },
      token,
      message: 'User created successfully'
    })
  } catch (error) {
    next(error)
  }
}

export const getMany = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await library.getMany()
    res.json({
      status: 'success',
      data: users,
      message: 'User retrieved successfully'
    })
  } catch (error) {
    next(error)
  }
}

export const getOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await library.getOne(+req.params.id)
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
    // const token = jwt.sign(updated, process.env.TOKEN_SECRET as string)
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
