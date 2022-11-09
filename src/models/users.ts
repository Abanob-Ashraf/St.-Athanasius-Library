import bcrypt from 'bcrypt'
import Client from '../database'
import {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUserById,
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
      throw new Error(`Unable to create ${u.first_name + ' ' + u.last_name} error: ${error}`)
    }
  }

  //getAllUsers
  async index(): Promise<User[]> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(getAllUsers)
      const user = result.rows
      connection.release()
      return user
    } catch (error) {
      throw new Error(`Unable to get users error: ${error}`)
    }
  }

  //getUser
  async show(id: number): Promise<User[]> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(getSingleUserById, [id])
      const user = { ...result.rows[0] }
      connection.release()
      return user
    } catch (error) {
      console.log(error)
      throw new Error(`Unable to get user ${id} error: ${error}`)
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
      throw new Error(`Unable to update ${u.id} error: ${error}`)
    }
  }

  //deleteUser
  async delete(id: number): Promise<User> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(deleteUser, [id])
      connection.release()
      return result.rows[0]
    } catch (error) {
      throw new Error(`Unable to delete user ${id} error: ${error}`)
    }
  }
}
