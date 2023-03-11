import Client from '../database'
import {
  CREATEBLOCK,
  UPDATEBLOCK,
  GETONEBLOCK,
  // DELETEBLOCK,
  GETMANYBLOCKS,
  CHECKIFBLOCKINTHISLIBRARY,
  GETMANYBLOCKS_LIBRARYID
} from '../sql-queries/blocks'

export type Block = {
  id: string
  block_number: number
  block_name: string
  library_id: string
  created_date: Date
  updated_date: Date
}

export class BlocksModel {
  // createBlock
  async createBlock(bl: Block): Promise<object> {
    try {
      const connection = await Client.connect()
      const test = await connection.query(CHECKIFBLOCKINTHISLIBRARY, [
        bl.block_number,
        bl.library_id
      ])
      if (!test.rows.length) {
        await connection.query(CREATEBLOCK, [
          bl.block_number,
          bl.block_name,
          bl.library_id,
          bl.created_date,
          bl.updated_date
        ])
        connection.release()
        const obj = {
          status: 201,
          message: 'block created correctly'
        }
        return obj
      }
      connection.release()
      const error = {
        status: 409,
        message: 'this block in this library already existe'
      }
      return error
    } catch (error) {
      throw new Error(`Unable to create ${bl.block_number}, ${(error as Error).message}`)
    }
  }

  // getManyBlocks
  async getManyBlocks(): Promise<object> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETMANYBLOCKS)
      const block = { status: 200, blockInfo: result.rows, message: 'backup completed' }
      connection.release()
      return block
    } catch (error) {
      throw new Error(`Unable to get blocks, ${(error as Error).message}`)
    }
  }

  // getOneBlock
  async getOneBlock(id: string): Promise<object> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETONEBLOCK, [id])
      if (result.rows.length) {
        const block = { status: 200, blockInfo: result.rows[0] }
        connection.release()
        return block
      }
      connection.release()
      const error = {
        status: 404,
        blockInfo: 'block was not found'
      }
      return error
    } catch (error) {
      throw new Error(`Unable to get block ${id}, ${(error as Error).message}`)
    }
  }

  // GETMANYBLOCKS_libraryID
  async getBlocksWithLibraryId(id: string): Promise<object> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETMANYBLOCKS_LIBRARYID, [id])
      if (result.rows.length) {
        const block = { status: 200, blockInfo: result.rows }
        connection.release()
        return block
      }
      connection.release()
      const error = {
        status: 404,
        blockInfo: 'block was not found'
      }
      return error
    } catch (error) {
      throw new Error(`Unable to get blocks, ${(error as Error).message}`)
    }
  }

  // updateBlock
  async updateBlock(bl: Block): Promise<object> {
    try {
      const connection = await Client.connect()
      const test = await connection.query(GETONEBLOCK, [bl.id])
      if (test.rows.length) {
        await connection.query(UPDATEBLOCK, [
          bl.id,
          bl.block_number,
          bl.block_name,
          bl.library_id,
          bl.updated_date
        ])
        connection.release()
        const obj = {
          status: 202,
          message: 'block updated correctly'
        }
        return obj
      }
      connection.release()
      const error = {
        status: 404,
        message: 'block was not found'
      }
      return error
    } catch (error) {
      throw new Error(`Unable to update ${bl.id}, ${(error as Error).message}`)
    }
  }

  // // deleteBlock
  // async deleteBlock(id: string): Promise<Block | string> {
  //   try {
  //     const connection = await Client.connect()
  //     const test = await connection.query(GETONEBLOCK, [id])
  //     if (test.rows.length) {
  //       await connection.query(DELETEBLOCK, [id])
  //       connection.release()
  //       return 'deleted block correctly'
  //     }
  //     connection.release()
  //     return 'block not found'
  //   } catch (error) {
  //     throw new Error(`Unable to delete block ${id}, ${(error as Error).message}`)
  //   }
  // }
}
