import Client from '../database'
import {
  CREATESHELF,
  UPDATESHELF,
  GETONESHELF,
  DELETESHELF,
  GETMANYSHELFS
} from '../sql-queries/shelfs'

export type Shelf = {
  id: number
  shelf_number: number
  shelf_name: string
  block_id: number
  created_date: Date
  updated_date: Date
}

export class ShelfsModel {
  // createShelf
  async create(sh: Shelf): Promise<Shelf> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(CREATESHELF, [
        sh.shelf_number,
        sh.shelf_name,
        sh.block_id,
        sh.created_date,
        sh.updated_date
      ])
      const shelf = result.rows[0]
      connection.release()
      return shelf
    } catch (error) {
      throw new Error(`Unable to create ${sh.shelf_number}, ${(error as Error).message}`)
    }
  }

  // getAllShelfs
  async getManyShelfs(): Promise<Shelf[]> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETMANYSHELFS)
      const shelf = result.rows
      connection.release()
      return shelf
    } catch (error) {
      throw new Error(`Unable to get shelfs, ${(error as Error).message}`)
    }
  }

  // getShelf
  async getOneShelf(id: number): Promise<Shelf[]> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETONESHELF, [id])
      if (result.rows.length) {
        const shelf = { ...result.rows[0] }
        connection.release()
        return shelf
      }
      connection.release()
      return result.rows[0]
    } catch (error) {
      throw new Error(`Unable to get shelf ${id}, ${(error as Error).message}`)
    }
  }

  // updateShelf
  async updateShelf(sh: Shelf): Promise<Shelf> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETONESHELF, [sh.id])
      if (result.rows.length) {
        const result = await connection.query(UPDATESHELF, [
          sh.id,
          sh.shelf_number,
          sh.shelf_name,
          sh.block_id,
          sh.updated_date
        ])
        const shelf = result.rows[0]
        connection.release()
        return shelf
      }
      connection.release()
      return result.rows[0]
    } catch (error) {
      throw new Error(`Unable to update ${sh.id}, ${(error as Error).message}`)
    }
  }

  // deleteShelf
  async deleteShelf(id: number): Promise<Shelf> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETONESHELF, [id])
      if (result.rows.length) {
        const result = await connection.query(DELETESHELF, [id])
        connection.release()
        return result.rows[0]
      }
      connection.release()
      return result.rows[0]
    } catch (error) {
      throw new Error(`Unable to delete user ${id}, ${(error as Error).message}`)
    }
  }
}
