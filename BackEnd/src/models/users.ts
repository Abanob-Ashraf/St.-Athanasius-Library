import bcrypt from 'bcrypt'
import Client from '../database'
import {
  addFkey,
  authenticateQ,
  authenticateQ2,
  createUser,
  deleteUser,
  dropFkey,
  getAllUsers,
  getSingleUserById,
  updateBookAfterDeleteUser,
  updateUser
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
  created_date: Date
  updated_date: Date
}

export class UsersModel {
  //createUser
  async create(u: User): Promise<User> {
    try {
      const connection = await Client.connect()
      const hashing = bcrypt.hashSync(u.password + pepper, parseInt(saltRounds as string))
      const result = await connection.query(createUser, [
        u.first_name,
        u.last_name,
        u.email,
        hashing,
        u.admin_flag,
        u.created_date,
        u.updated_date
      ])
      const user = result.rows[0]
      connection.release()
      return user
    } catch (error) {
      throw new Error(
        `Unable to create (${u.first_name + ' ' + u.last_name}): ${(error as Error).message}`
      )
    }
  }

  //getAllUsers
  async getManyUsers(): Promise<User[]> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(getAllUsers)
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
      const result = await connection.query(getSingleUserById, [id])
      const user = { ...result.rows[0] }
      connection.release()
      return user
    } catch (error) {
      throw new Error(`Unable to get user ${id}, ${(error as Error).message}`)
    }
  }

  //updateUser
  async update(u: User): Promise<User> {
    try {
      const connection = await Client.connect()
      const hashing = bcrypt.hashSync(u.password + pepper, parseInt(saltRounds as string))
      const result = await connection.query(updateUser, [
        u.id,
        u.first_name,
        u.last_name,
        u.email,
        hashing,
        u.admin_flag,
        u.updated_date
      ])
      const user = result.rows[0]
      connection.release()
      return user
    } catch (error) {
      throw new Error(
        `Unable to update ${u.first_name + ' ' + u.last_name}, ${(error as Error).message}`
      )
    }
  }

  //deleteUser
  async delete(id: number): Promise<User> {
    try {
      const connection = await Client.connect()
      await connection.query(dropFkey)
      const result = await connection.query(deleteUser, [id])
      await connection.query(updateBookAfterDeleteUser, [id])
      await connection.query(addFkey)
      connection.release()
      return result.rows[0]
    } catch (error) {
      throw new Error(`Unable to delete user ${id} ${(error as Error).message}`)
    }
  }

  //authenticateUser
  async authenticate(email: string, password: string): Promise<User | null> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(authenticateQ, [email])
      if (result.rows.length) {
        const { password: hashPassword } = result.rows[0]
        const isPasswordValid = bcrypt.compareSync(password + pepper, hashPassword)
        if (isPasswordValid) {
          const userInfo = await connection.query(authenticateQ2, [email])
          return userInfo.rows[0]
        }
      }
      connection.release()
      return null
    } catch (error) {
      throw new Error(`Unable to login: ${(error as Error).message}`)
    }
  }
}
