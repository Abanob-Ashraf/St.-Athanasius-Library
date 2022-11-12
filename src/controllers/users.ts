import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { User, UsersModel } from '../models/users'

const library = new UsersModel()

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await library.index()
    return res.status(200).send(users)
  } catch (error) {
    res.status(401).json(error)
  }
}

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await library.show(+req.params.id)
    return res.status(200).send(user)
  } catch (error) {
    res.status(401).json(error)
  }
}

export const createUser = async (req: Request, res: Response) => {
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
    return res.status(200).json(token)
  } catch (error) {
    res.status(400).json(error)
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await library.delete(+req.params.id)
    return res.status(200).send(deletedUser)
  } catch (error) {
    res.status(401).json(error)
  }
}

export const updateUser = async (req: Request, res: Response) => {
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
    return res.status(200).json(updated)
  } catch (error) {
    res.status(401).json(error)
  }
}
