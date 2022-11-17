import { Request, Response, NextFunction } from 'express'
import { Block, BlocksModel } from '../models/blocks'

const library = new BlocksModel()

export const createBlock = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const block: Block = {
      block_number: req.body.block_number,
      block_name: req.body.block_name,
      created_date: new Date(),
      updated_date: new Date(),
      id: undefined as unknown as number
    }

    const newBlock = await library.create(block)
    res.json({
      status: 'success',
      data: { ...newBlock },
      message: 'Block created successfully'
    })
  } catch (error) {
    next(error)
  }
}

export const getAllBlocks = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const blocks = await library.index()
    res.json({
      status: 'success',
      data: blocks,
      message: 'Blocks retrieved successfully'
    })
  } catch (error) {
    next(error)
  }
}

export const getBlock = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const block = await library.show(+req.params.id)
    res.json({
      status: 'success',
      data: block,
      message: 'Block retrieved successfully'
    })
  } catch (error) {
    next(error)
  }
}

export const updateBlock = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const block = {
      id: +req.params.id,
      block_number: req.body.block_number,
      block_name: req.body.block_name,
      created_date: new Date(),
      updated_date: new Date()
    }

    const updated = await library.update(block)
    res.json({
      status: 'success',
      data: updated,
      message: 'Block updated successfully'
    })
  } catch (error) {
    next(error)
  }
}

export const deleteBlock = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deletedBlock = await library.delete(+req.params.id)
    res.json({
      status: 'success',
      data: deletedBlock,
      message: 'Block deleted successfully'
    })
  } catch (error) {
    next(error)
  }
}
