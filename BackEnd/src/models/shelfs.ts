import Client from '../database'
import {
  CREATESHELF,
  UPDATESHELF,
  GETONESHELF,
  // DELETESHELF,
  GETMANYSHELFS,
  GETMANYSHELFS_BLOCKSID,
  CHECKIFSHELFINTHISBLOCK
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
  async createShelf(sh: Shelf): Promise<Shelf | string> {
    try {
      const connection = await Client.connect()
      const test = await connection.query(CHECKIFSHELFINTHISBLOCK, [sh.shelf_number, sh.block_id])
      if (!test.rows.length) {
        await connection.query(CREATESHELF, [
          sh.shelf_number,
          sh.shelf_name,
          sh.block_id,
          sh.created_date,
          sh.updated_date
        ])
        connection.release()
        return 'shelf  created correctly'
      }
      connection.release()
      return 'this shelf in this block already existe'
    } catch (error) {
      throw new Error(`Unable to create ${sh.shelf_number}, ${(error as Error).message}`)
    }
  }

  // getManyShelfs
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

  // getOneShelf
  async getOneShelf(id: number): Promise<Shelf[] | string> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETONESHELF, [id])
      if (result.rows.length) {
        const shelf = { ...result.rows[0] }
        connection.release()
        return shelf
      }
      connection.release()
      return 'shelf was not found'
    } catch (error) {
      throw new Error(`Unable to get shelf ${id}, ${(error as Error).message}`)
    }
  }

  // GETMANYSHELFS_BLOCKSID
  async getShelfsWithBlockId(id: number): Promise<Shelf[] | string> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETMANYSHELFS_BLOCKSID, [id])
      if (result.rows.length) {
        const shelf = result.rows
        connection.release()
        return shelf
      }
      connection.release()
      return 'block was not found'
    } catch (error) {
      throw new Error(`Unable to get shelfs, ${(error as Error).message}`)
    }
  }

  // updateShelf
  async updateShelf(sh: Shelf): Promise<Shelf | string> {
    try {
      const connection = await Client.connect()
      const test = await connection.query(GETONESHELF, [sh.id])
      if (test.rows.length) {
        await connection.query(UPDATESHELF, [
          sh.id,
          sh.shelf_number,
          sh.shelf_name,
          sh.block_id,
          sh.updated_date
        ])
        connection.release()
        return 'shelf updated correctly'
      }
      connection.release()
      return 'shelf was not found'
    } catch (error) {
      throw new Error(`Unable to update ${sh.id}, ${(error as Error).message}`)
    }
  }

  // // deleteShelf
  // async deleteShelf(id: number): Promise<Shelf | string> {
  //   try {
  //     const connection = await Client.connect()
  //     const test = await connection.query(GETONESHELF, [id])
  //     if (test.rows.length) {
  //       await connection.query(DELETESHELF, [id])
  //       connection.release()
  //       return 'shelf deleted correctly'
  //     }
  //     connection.release()
  //     return 'shelf was not found'
  //   } catch (error) {
  //     throw new Error(`Unable to delete block ${id}, ${(error as Error).message}`)
  //   }
  // }
}
