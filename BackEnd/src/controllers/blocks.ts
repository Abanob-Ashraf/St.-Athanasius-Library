import { Request, Response } from 'express'
import { Block, BlocksModel } from '../models/blocks'

const library = new BlocksModel()

export const getAllBlocks = async (_req: Request, res: Response) => {
  try {
    const blocks = await library.index()
    return res.status(200).send(blocks)
  } catch (error) {
    res.status(401).json(error)
  }
}

export const getBlock = async (req: Request, res: Response) => {
  try {
    const block = await library.show(+req.params.id)
    return res.status(200).send(block)
  } catch (error) {
    res.status(401).json(error)
  }
}

export const createBlock = async (req: Request, res: Response) => {
  try {
    const block: Block = {
      block_number: req.body.block_number,
      block_name: req.body.block_name,
      created_date: new Date(),
      updated_date: new Date(),
      id: undefined as unknown as number
    }

    const newBlock = await library.create(block)
    return res.status(200).json(newBlock)
  } catch (error) {
    res.status(400).json(error)
  }
}

export const deleteBlock = async (req: Request, res: Response) => {
  try {
    const deletedBlock = await library.delete(+req.params.id)
    return res.status(200).send(deletedBlock)
  } catch (error) {
    res.status(401).json(error)
  }
}

export const updateBlock = async (req: Request, res: Response) => {
  try {
    const block = {
      id: +req.params.id,
      block_number: req.body.block_number,
      block_name: req.body.block_name,
      created_date: new Date(),
      updated_date: new Date()
    }

    const updated = await library.update(block)
    // const token = jwt.sign(updated, process.env.TOKEN_SECRET as string)
    return res.status(200).json(updated)
  } catch (error) {
    res.status(401).json(error)
  }
}
