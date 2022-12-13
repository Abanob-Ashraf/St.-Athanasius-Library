import { Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { User, UsersModel } from '../models/users'
import { body, validationResult } from 'express-validator'

const library = new UsersModel()

// createUser
export const createUser = async (req: Request, res: Response) => {
  try {
    const user: User = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      admin_flag: req.body.admin_flag || 'false',
      user_status: 'AVILABLE',
      created_date: new Date(),
      updated_date: new Date(),
      id: undefined as unknown as number
    }
    const newUser = await library.create(user)
    res.status(200).json(newUser)
  } catch (error) {
    res.status(400).json(error)
  }
}

// getManyUsers
export const getManyUsers = async (_req: Request, res: Response) => {
  try {
    const users = await library.getManyUsers()
    return res.status(200).send(users)
  } catch (error) {
    res.status(401).json(error)
  }
}

// getOneUser
export const getOneUser = async (req: Request, res: Response) => {
  try {
    const user = await library.getOneUser(+req.params.id)
    if (user == null) {
      return res.status(404).json('User was not found')
    } else {
      return res.send(user)
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
    if (user == null) {
      return res.status(404).json('User was not found')
    } else {
      return res.send(user)
    }
  } catch (error) {
    res.status(401).json(error)
  }
}

// updateUser
export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = {
      id: +req.params.id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      admin_flag: req.body.admin_flag,
      user_status: 'AVILABLE',
      created_date: new Date(),
      updated_date: new Date()
    }
    const updateUser = await library.updateUser(user)
    if (updateUser == null) {
      return res.status(404).json('User was not found')
    } else {
      return res.send(updateUser)
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
    if (deletedUser == null) {
      return res.status(404).json('User was not found')
    } else {
      return res.send(deletedUser)
    }
  } catch (error) {
    res.status(401).json(error)
  }
}

// authenticateUser
export const authenticateUser = async (req: Request, res: Response) => {
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
    return res.status(200).send(users)
  } catch (error) {
    res.status(401).json(error)
  }
}
