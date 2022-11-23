import bcrypt from 'bcrypt'
import Client from '../database'
import {
  AUTHANTICATE,
  AUTHANTICATE2,
  CREATEUSER,
  DELETEUSER,
  GETALLDELETEDUSERS,
  GETMANYUSERS,
  GETONEUSER,
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
  admin_flag: boolean
  user_status: string
  created_date: Date
  updated_date: Date
}

export class UsersModel {
  //createUser
  async create(u: User): Promise<User> {
    try {
      const connection = await Client.connect()
      const hashing = bcrypt.hashSync(u.password + pepper, parseInt(saltRounds as string))
      const result = await connection.query(CREATEUSER, [
        u.first_name,
        u.last_name,
        u.email,
        hashing,
        u.admin_flag,
        u.user_status,
        u.created_date,
        u.updated_date
      ])
      const user = result.rows[0]
      connection.release()
      return user
    } catch (error) {
      throw new Error(`Unable to create ${u.first_name + ' ' + u.last_name} error: ${error}`)
    }
  }

  //getAllUsers
  async getManyUsers(): Promise<User[]> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETMANYUSERS)
      const user = result.rows
      connection.release()
      return user
    } catch (error) {
      throw new Error(`Unable to get users ${(error as Error).message}`)
    }
  }

  //getUser
  async getOneUser(id: number): Promise<User[]> {
    try {
      const connection = await Client.connect()
      const test = await connection.query(GETONEUSER, [id])
      if (test.rows.length) {
        const result = await connection.query(GETONEUSER, [id])
        const user = { ...result.rows[0] }
        connection.release()
        return user
      }
      connection.release()
      return test.rows[0]
    } catch (error) {
      throw new Error(`Unable to get user ${id}, ${(error as Error).message}`)
    }
  }

  //updateUser
  async update(u: User): Promise<User> {
    try {
      const connection = await Client.connect()
      const test = await connection.query(GETONEUSER, [u.id])
      if (test.rows.length) {
        const hashing = bcrypt.hashSync(u.password + pepper, parseInt(saltRounds as string))
        const result = await connection.query(UPDATEUSER, [
          u.id,
          u.first_name,
          u.last_name,
          u.email,
          hashing,
          u.admin_flag,
          u.user_status,
          u.updated_date
        ])
        const user = result.rows[0]
        connection.release()
        return user
      }
      connection.release()
      return test.rows[0]
    } catch (error) {
      throw new Error(
        `Unable to update ${u.first_name + ' ' + u.last_name}, ${(error as Error).message}`
      )
    }
  }

  //deleteUser
  async delete(id: number, user_status: string, updated_date: Date): Promise<User | null> {
    try {
      const connection = await Client.connect()
      const test = await connection.query(GETONEUSER, [id])
      if (test.rows.length) {
        const result = await connection.query(SELECTSTATUS, [id])
        const { user_status: status } = result.rows[0]
        const isStatusAVILABLE = status
        if (isStatusAVILABLE == 'AVILABLE') {
          const deleteUser = await connection.query(DELETEUSER, [id, user_status, updated_date])
          await connection.query(UPDATEBOOKAFTERDELETEUSER, [id])
          connection.release()
          return deleteUser.rows[0]
        } else {
          connection.release()
          return null
        }
      }
      connection.release()
      return test.rows[0]
    } catch (error) {
      throw new Error(`Unable to delete user ${id} ${(error as Error).message}`)
    }
  }

  //authenticateUser
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

  //getAllDeletedUsers
  async getAllDeletedUsers(): Promise<User[]> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETALLDELETEDUSERS)
      const user = result.rows
      connection.release()
      return user
    } catch (error) {
      throw new Error(`Unable to get deleted users ${(error as Error).message}`)
    }
  }
}
