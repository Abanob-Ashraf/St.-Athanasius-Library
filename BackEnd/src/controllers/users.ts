import { Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { User, UsersModel } from '../models/users'
import { validationResult } from 'express-validator'
import nodemailer from 'nodemailer'
import sendgridTransport from 'nodemailer-sendgrid-transport'

const library = new UsersModel()
const emailapikey = process.env.API_KEY

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: { api_key: emailapikey }
  })
)

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
      full_name: `${req.body.first_name} ${req.body.last_name}`,
      email: req.body.email.toLowerCase(),
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

    const userData = await library.getUserDataToResetPassword(user.email)
    const userInfo = userData['userInfo']

    const token = jwt.sign({ userInfo }, process.env.TOKEN_SECRET as unknown as string, {
      expiresIn: process.env.JWT_EXPIRES_IN
    })
    transporter.sendMail({
      to: user.email,
      from: 'abanobashraf74@gmail.com',
      subject: 'Signup succeeded',
      html: `
      <h1>Wellcome in our Library</h1>
      <h3>Click this link to login in our website.</h3>
      <a href="http://127.0.0.1:5500/Password_resetPassword.html?${token}"> link </a> 
      <h4>This link will expire in 48 hours.</h4>
    `
    })
    res.status(createdUser['status']).json(createdUser['message'])
  } catch (error) {
    return res.status(409).json('this email already existe')
  }
}

// getManyUsers
export const getManyUsers = async (_req: Request, res: Response) => {
  try {
    const users = await library.getManyUsers()
    res.status(users['status']).json(users['userInfo'])
  } catch (error) {
    res.status(400).json(error)
  }
}

// getOneUser
export const getOneUser = async (req: Request, res: Response) => {
  try {
    const user = await library.getOneUser(+req.params.id)
    res.status(user['status']).json(user['userInfo'])
  } catch (error) {
    res.status(400).json(error)
  }
}

export const searchForUser = async (req: Request, res: Response) => {
  try {
    const user = await library.searchForUser(
      req.query.first_name as string,
      req.query.last_name as string,
      req.query.full_name as string,
      req.query.email as string,
      req.query.job as string
    )
    res.status(user['status']).json(user['userInfo'])
  } catch (error) {
    res.status(400).json(error)
  }
}

// getOneUser
export const getMine = async (req: Request, res: Response) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '') as string
    const decode = jwt.verify(token, process.env.TOKEN_SECRET as unknown as string) as JwtPayload
    const userId = decode.user.id

    const user = await library.getOneUser(+userId)
    res.status(user['status']).json(user['userInfo'])
  } catch (error) {
    res.status(400).json(error)
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
        full_name: `${req.body.first_name} ${req.body.last_name}`,
        email: req.body.email.toLowerCase(),
        password: req.body.password,
        phone_number: req.body.phone_number,
        job: req.body.job,
        admin_flag: req.body.admin_flag || 'false',
        user_status: 'AVILABLE',
        created_date: new Date(),
        updated_date: new Date()
      }

      const updateUser = await library.updateUser(user)
      res.status(updateUser['status']).json(updateUser['message'])
    } else {
      return res.status(405).json(`you havn't the role`)
    }
  } catch (error) {
    res.status(409).json('this email already existe')
  }
}

// changePassword
export const changePassword = async (req: Request, res: Response) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { old_password, new_password } = req.body
  if (!old_password || !new_password) {
    return res.status(400).json('missing or malformed parameters. email, password required')
  }
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '') as string
    const decode = jwt.verify(token, process.env.TOKEN_SECRET as unknown as string) as JwtPayload
    const userId = decode.user.id

    const user = await library.changePassword(+userId, old_password, new_password, new Date())
    res.status(user['status']).json(user['message'])
  } catch (error) {
    res.status(400).json(error)
  }
}

// getUserDataToResetPassword
export const getUserDataToResetPassword = async (req: Request, res: Response) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const email = req.body.email.toLowerCase()
  if (!email) {
    return res.status(400).json('missing or malformed parameters. email, password required')
  }
  try {
    const user = await library.getUserDataToResetPassword(email)
    const userInfo = user['userInfo']

    const token = jwt.sign({ userInfo }, process.env.TOKEN_SECRET as unknown as string, {
      expiresIn: 1800
    })
    if (user['userInfo'] != 'this email does not exiest here') {
      transporter.sendMail({
        to: email,
        from: 'abanobashraf74@gmail.com',
        subject: 'Password reset',
        html: `
          <h1>You requested a password reset</h1>
          <h3>Click this link to set a new password.</h3>
          <a href="http://127.0.0.1:5500/Password_resetPassword.html?${token}"> link </a>
          <h4>This link will expire in 30 minutes.</h4>
        `
      })
    }
    return res.status(user['status']).json(user['message'])
  } catch (error) {
    res.status(400).json(error)
  }
}

// postNewPassword
export const postNewPassword = async (req: Request, res: Response) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  const { new_password } = req.body
  if (!new_password) {
    return res.status(400).json('missing or malformed parameters. email, password required')
  }
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '') as string
    const decode = jwt.verify(token, process.env.TOKEN_SECRET as unknown as string) as JwtPayload
    const useremail = decode.userInfo.email

    const user = await library.postNewPassword(useremail, new_password, new Date())
    return res.status(user['status']).json(user['message'])
  } catch (error) {
    res.status(400).json(error)
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
    res.status(deletedUser['status']).json(deletedUser['message'])
  } catch (error) {
    res.status(400).json(error)
  }
}

// authenticateUser
export const authenticateUser = async (req: Request, res: Response) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  const email = req.body.email.toLowerCase()
  const password = req.body.password
  if (!email || !password) {
    return res.status(400).json('missing or malformed parameters. email, password required')
  }
  try {
    const user = await library.authenticate(email, password)
    const token = jwt.sign({ user }, process.env.TOKEN_SECRET as unknown as string, {
      expiresIn: process.env.JWT_EXPIRES_IN
    })
    if (!user) {
      return res.status(400).json('the username and password do not match please try again')
    }
    if (user['user_status'] == 'NOT AVILABLE') {
      return res.status(423).json('you can not login contact with admin')
    }
    return res.status(200).json({ ...user, token })
  } catch (error) {
    res.status(400).json(error)
  }
}

// getAllUnAvilableUsers
export const getAllUnAvilableUsers = async (_req: Request, res: Response) => {
  try {
    const users = await library.getAllUnAvilableUsers()
    res.status(users['status']).json(users['userInfo'])
  } catch (error) {
    res.status(400).json(error)
  }
}
