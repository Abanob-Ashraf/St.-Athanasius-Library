import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { User, UsersModel } from '../models/users'

const store = new UsersModel()

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await store.index()
    return res.status(200).send(users)
  } catch (error) {
    res.status(401).json(error)
  }
}

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await store.show(+req.params.id)
    return res.send(user)
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
      created_date: req.body.created_date,
      updated_date: req.body.updated_date,
      admin_flag: req.body.admin_flag,
      id: undefined as unknown as number
    }

    const newUser = await store.create(user)
    const token = jwt.sign(newUser, process.env.TOKEN_SECRET as string)
    res.status(200).json(token)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await store.delete(+req.params.id)
    return res.send(deletedUser)
  } catch (error) {
    console.log(error)
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
      created_date: req.body.created_date,
      updated_date: req.body.updated_date,
      admin_flag: req.body.admin_flag
    }
    const updated = await store.update(user)
    return res.json(updated)
  } catch (error) {
    res.status(401).json(error)
  }
}
