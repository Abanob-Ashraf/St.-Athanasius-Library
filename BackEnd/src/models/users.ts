import bcrypt from 'bcrypt'
import Client from '../database'
import {
  AUTHANTICATE,
  AUTHANTICATE2,
  CHANGEPASSWORD,
  CREATEUSER,
  DELETEUSER,
  GETALLUNAVILABLEUSERS,
  GETMANYUSERS,
  GETONEUSER,
  GETPASSWORD,
  GETUSERWITHEMAIL,
  RESETPASSWORD,
  SEARCHFORUSER,
  SELECTSTATUS,
  UPDATEBOOKAFTERDELETEUSER,
  UPDATEUSER
} from '../sql-queries/users'

const saltRounds = process.env.SALT_ROUND
const pepper = process.env.BCRYPT_PASSWORD

export type User = {
  id: number
  first_name: string
  last_name: string
  email: string
  password: string
  phone_number: string
  job: string
  admin_flag: boolean
  user_status: string
  created_date: Date
  updated_date: Date
}

export class UsersModel {
  // createUser
  async create(u: User): Promise<object> {
    try {
      const connection = await Client.connect()
      const hashing = bcrypt.hashSync(u.password + pepper, parseInt(saltRounds as string))
      await connection.query(CREATEUSER, [
        u.first_name,
        u.last_name,
        u.email,
        hashing,
        u.phone_number,
        u.job,
        u.admin_flag,
        u.user_status,
        u.created_date,
        u.updated_date
      ])
      connection.release()
      const obj = {
        status: 201,
        message: 'user created correctly'
      }
      return obj
    } catch (error) {
      throw new Error(`Unable to create ${u.first_name + ' ' + u.last_name} error: ${error}`)
    }
  }

  // getManyUsers
  async getManyUsers(): Promise<object> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETMANYUSERS)
      const user = { status: 200, userInfo: result.rows }
      connection.release()
      return user
    } catch (error) {
      throw new Error(`Unable to get users ${(error as Error).message}`)
    }
  }

  // getOneUser
  async getOneUser(id: number): Promise<object> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETONEUSER, [id])
      if (result.rows.length) {
        const user = { status: 200, userInfo: result.rows[0] }
        connection.release()
        return user
      }
      connection.release()
      const error = {
        status: 404,
        userInfo: 'user not found'
      }
      return error
    } catch (error) {
      throw new Error(`Unable to get user ${id}, ${(error as Error).message}`)
    }
  }

  // searchForUser
  async searchForUser(
    first_name: string,
    last_name: string,
    firstname: string,
    email: string,
    job: string
  ): Promise<object> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(SEARCHFORUSER, [
        first_name,
        last_name,
        firstname,
        email,
        job
      ])
      if (result.rows.length) {
        const user = { status: 200, userInfo: result.rows }
        connection.release()
        return user
      }
      connection.release()
      const error = {
        status: 404,
        userInfo: 'user not found'
      }
      return error
    } catch (error) {
      throw new Error(`Unable to get user ${first_name},${last_name} ${(error as Error).message}`)
    }
  }

  // updateUser
  async updateUser(u: User): Promise<object> {
    try {
      const connection = await Client.connect()
      const test = await connection.query(GETONEUSER, [u.id])
      if (test.rows.length) {
        await connection.query(UPDATEUSER, [
          u.id,
          u.first_name,
          u.last_name,
          u.email,
          u.phone_number,
          u.job,
          u.admin_flag,
          u.user_status,
          u.updated_date
        ])
        connection.release()
        const obj = {
          status: 202,
          message: 'updated user correctly'
        }
        return obj
      }
      connection.release()
      const error = {
        status: 404,
        message: 'user not found'
      }
      return error
    } catch (error) {
      throw new Error(
        `Unable to update ${u.first_name + ' ' + u.last_name}, ${(error as Error).message}`
      )
    }
  }

  // changePassword
  async changePassword(
    id: number,
    old_password: string,
    new_password: string,
    updated_date: Date
  ): Promise<object> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETPASSWORD, [id])
      if (result.rows.length) {
        const { password: hashPassword } = result.rows[0]
        const isPasswordValid = bcrypt.compareSync(old_password + pepper, hashPassword)
        if (isPasswordValid) {
          const newHashedPass = bcrypt.hashSync(
            new_password + pepper,
            parseInt(saltRounds as string)
          )
          if (old_password == new_password) {
            const error = {
              status: 406,
              message: `you used this password before try another password`
            }
            return error
          }
          await connection.query(CHANGEPASSWORD, [id, newHashedPass, updated_date])
          const obj = {
            status: 202,
            message: 'password changed correctly'
          }
          return obj
        }
      }
      connection.release()
      const error = {
        status: 406,
        message: 'the password do not match please try again'
      }
      return error
    } catch (error) {
      throw new Error(`Unable to get password users ${(error as Error).message}`)
    }
  }

  // resetPassword
  async resetPassword(email: string, new_password: string, updated_date: Date): Promise<object> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETUSERWITHEMAIL, [email])
      if (result.rows.length) {
        const newHashedPass = bcrypt.hashSync(new_password + pepper, parseInt(saltRounds as string))
        await connection.query(RESETPASSWORD, [email, newHashedPass, updated_date])
        const obj = {
          status: 202,
          message: 'password changed correctly'
        }
        return obj
      }
      connection.release()
      const error = {
        status: 404,
        message: 'this email does not exiest here'
      }
      return error
    } catch (error) {
      throw new Error(`Unable to get password users ${(error as Error).message}`)
    }
  }

  // deleteUser
  async deleteUser(
    userId: number,
    id: number,
    user_status: string,
    updated_date: Date
  ): Promise<object> {
    try {
      const connection = await Client.connect()
      const test = await connection.query(GETONEUSER, [id])
      if (test.rows.length) {
        const result = await connection.query(SELECTSTATUS, [id])
        const { user_status: status } = result.rows[0]
        const isStatusAVILABLE = status
        if (userId != id) {
          if (isStatusAVILABLE == 'AVILABLE') {
            await connection.query(DELETEUSER, [id, user_status, updated_date])
            await connection.query(UPDATEBOOKAFTERDELETEUSER, [id, userId])
            connection.release()
            const obj = {
              status: 202,
              message: 'user deleted correctly'
            }
            return obj
          } else {
            connection.release()
            const obj = {
              status: 208,
              message: 'user already deleted'
            }
            return obj
          }
        } else {
          connection.release()
          const error = {
            status: 406,
            message: 'you can not delete your self'
          }
          return error
        }
      }
      connection.release()
      const error = {
        status: 404,
        message: 'user not found'
      }
      return error
    } catch (error) {
      throw new Error(`Unable to delete user ${id} ${(error as Error).message}`)
    }
  }

  // authenticateUser
  async authenticate(email: string, password: string): Promise<User | null> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(AUTHANTICATE, [email])
      if (result.rows.length) {
        const { password: hashPassword } = result.rows[0]
        const isPasswordValid = bcrypt.compareSync(password + pepper, hashPassword)
        if (isPasswordValid) {
          const userInfo = await connection.query(AUTHANTICATE2, [email])
          return userInfo.rows[0]
        }
      }
      connection.release()
      return null
    } catch (error) {
      throw new Error(`Unable to login: ${(error as Error).message}`)
    }
  }

  // getAllUnAvilableUsers
  async getAllUnAvilableUsers(): Promise<object> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETALLUNAVILABLEUSERS)
      if (result.rows.length) {
        const user = { status: 200, userInfo: result.rows }
        connection.release()
        return user
      }
      const error = {
        status: 404,
        userInfo: 'NOT AVILABLE users not found'
      }
      return error
    } catch (error) {
      throw new Error(`Unable to get UnAvilableUsers users ${(error as Error).message}`)
    }
  }
}
