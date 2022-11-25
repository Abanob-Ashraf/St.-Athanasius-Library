import Client from '../database'
import {
  CREATEBLOCK,
  UPDATEBLOCK,
  GETONEBLOCK,
  DELETEBLOCK,
  GETMANYBLOCKS
} from '../sql-queries/blocks'

export type Block = {
  id: number
  block_number: number
  block_name: string
  created_date: Date
  updated_date: Date
}

export class BlocksModel {
  // createBlock
  async createBlock(bl: Block): Promise<Block> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(CREATEBLOCK, [
        bl.block_number,
        bl.block_name,
        bl.created_date,
        bl.updated_date
      ])
      const block = result.rows[0]
      connection.release()
      return block
    } catch (error) {
      throw new Error(`Unable to create ${bl.block_number}, ${(error as Error).message}`)
    }
  }

  // getManyBlocks
  async getManyBlocks(): Promise<Block[]> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETMANYBLOCKS)
      const block = result.rows
      connection.release()
      return block
    } catch (error) {
      throw new Error(`Unable to get blocks, ${(error as Error).message}`)
    }
  }

  // getOneBlock
  async getOneBlock(id: number): Promise<Block[]> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETONEBLOCK, [id])
      if (result.rows.length) {
        const block = { ...result.rows[0] }
        connection.release()
        return block
      }
      connection.release()
      return result.rows[0]
    } catch (error) {
      throw new Error(`Unable to get block ${id}, ${(error as Error).message}`)
    }
  }

  // updateBlock
  async updateBlock(bl: Block): Promise<Block> {
    try {
      const connection = await Client.connect()
      const test = await connection.query(GETONEBLOCK, [bl.id])
      if (test.rows.length) {
        const result = await connection.query(UPDATEBLOCK, [
          bl.id,
          bl.block_number,
          bl.block_name,
          bl.updated_date
        ])
        const block = result.rows[0]
        connection.release()
        return block
      }
      connection.release()
      return test.rows[0]
    } catch (error) {
      throw new Error(`Unable to update ${bl.id}, ${(error as Error).message}`)
    }
  }

  // deleteBlock
  async deleteBlock(id: number): Promise<Block> {
    try {
      const connection = await Client.connect()
      const test = await connection.query(GETONEBLOCK, [id])
      if (test.rows.length) {
        const result = await connection.query(DELETEBLOCK, [id])
        connection.release()
        return result.rows[0]
      }
      connection.release()
      return test.rows[0]
    } catch (error) {
      throw new Error(`Unable to delete block ${id}, ${(error as Error).message}`)
    }
  }
}
