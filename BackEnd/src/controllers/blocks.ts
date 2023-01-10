import { Request, Response } from 'express'
import { Block, BlocksModel } from '../models/blocks'

const library = new BlocksModel()

// createBlock
export const createBlock = async (req: Request, res: Response) => {
  try {
    const block: Block = {
      block_number: req.body.block_number,
      block_name: req.body.block_name,
      created_date: new Date(),
      updated_date: new Date(),
      id: undefined as unknown as number
    }
    const newBlock = await library.createBlock(block)
    res.status(newBlock['status']).json(newBlock['message'])
  } catch (error) {
    res.status(409).json('this block already existe')
  }
}

// getManyBlocks
export const getManyBlocks = async (_req: Request, res: Response) => {
  try {
    const blocks = await library.getManyBlocks()
    res.status(blocks['status']).json(blocks['blockInfo'])
  } catch (error) {
    res.status(400).json(error)
  }
}

// getOneBlock
export const getOneBlock = async (req: Request, res: Response) => {
  try {
    const block = await library.getOneBlock(+req.params.id)
    res.status(block['status']).json(block['blockInfo'])
  } catch (error) {
    res.status(401).json(error)
  }
}

// updateBlock
export const updateBlock = async (req: Request, res: Response) => {
  try {
    const block = {
      id: +req.params.id,
      block_number: req.body.block_number,
      block_name: req.body.block_name,
      created_date: new Date(),
      updated_date: new Date()
    }
    const updatedBlock = await library.updateBlock(block)
    res.status(updatedBlock['status']).json(updatedBlock['message'])
  } catch (error) {
    res.status(409).json('this block already existe')
  }
}

// // deleteBlock
// export const deleteBlock = async (req: Request, res: Response) => {
//   try {
//     const deletedBlock = await library.deleteBlock(+req.params.id)
//     if (typeof deletedBlock == 'string') {
//       return res.status(404).json(deletedBlock)
//     }
//   } catch (error) {
//     res.status(401).json(error)
//   }
// }
