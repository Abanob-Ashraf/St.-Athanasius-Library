import Client from '../database'
import {
  createBlock,
  updateBlock,
  getSingleBlockById,
  deleteBlock,
  getAllBlocks
} from '../sql-queries/blocks'

export type Block = {
  id: number
  block_number: number
  block_name: string
  created_date: Date
  updated_date: Date
}

export class BlocksModel {
  //createBlock
  async create(bl: Block): Promise<Block> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(createBlock, [
        bl.block_number,
        bl.block_name,
        bl.created_date,
        bl.updated_date
      ])
      const block = result.rows[0]
      connection.release()
      return block
    } catch (error) {
      throw new Error(`Unable to create ${bl.block_number} error: ${error}`)
    }
  }

  //getAllBlocks
  async index(): Promise<Block[]> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(getAllBlocks)
      const block = result.rows
      connection.release()
      return block
    } catch (error) {
      throw new Error(`Unable to get blocks error: ${error}`)
    }
  }

  //getBlock
  async show(id: number): Promise<Block[]> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(getSingleBlockById, [id])
      const block = { ...result.rows[0] }
      connection.release()
      return block
    } catch (error) {
      throw new Error(`Unable to get block ${id} error: ${error}`)
    }
  }

  //updateBlock
  async update(bl: Block): Promise<Block> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(updateBlock, [
        bl.id,
        bl.block_number,
        bl.block_name,
        bl.updated_date
      ])
      const block = result.rows[0]
      connection.release()
      return block
    } catch (error) {
      throw new Error(`Unable to update ${bl.id} error: ${error}`)
    }
  }

  //deleteBlock
  async delete(id: number): Promise<Block> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(deleteBlock, [id])
      connection.release()
      return result.rows[0]
    } catch (error) {
      throw new Error(`Unable to delete user ${id} error: ${error}`)
    }
  }
}
