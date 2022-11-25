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
    res.status(200).json(newBlock)
  } catch (error) {
    res.status(400).json(error)
  }
}

// getManyBlocks
export const getManyBlocks = async (_req: Request, res: Response) => {
  try {
    const blocks = await library.getManyBlocks()
    res.status(200).json(blocks)
  } catch (error) {
    res.status(400).json(error)
  }
}

// getOneBlock
export const getOneBlock = async (req: Request, res: Response) => {
  try {
    const block = await library.getOneBlock(+req.params.id)
    if (block == null) {
      return res.status(404).json('block was not found')
    } else {
      return res.send(block)
    }
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
    if (updatedBlock == null) {
      return res.status(404).json('block was not found')
    } else {
      return res.send(updatedBlock)
    }
  } catch (error) {
    res.status(401).json(error)
  }
}

// deleteBlock
export const deleteBlock = async (req: Request, res: Response) => {
  try {
    const deletedBlock = await library.deleteBlock(+req.params.id)
    if (deletedBlock == null) {
      return res.status(404).json('block was not found')
    } else {
      return res.send(deletedBlock)
    }
  } catch (error) {
    res.status(401).json(error)
  }
}
