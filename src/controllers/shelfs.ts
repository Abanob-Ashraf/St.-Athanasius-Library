import { Request, Response } from 'express'
import { Shelf, ShelfsModel } from '../models/shelfs'

const library = new ShelfsModel()

export const getAllShelfs = async (_req: Request, res: Response) => {
  try {
    const shelfs = await library.index()
    return res.status(200).send(shelfs)
  } catch (error) {
    res.status(401).json(error)
  }
}

export const getShelf = async (req: Request, res: Response) => {
  try {
    const shelf = await library.show(+req.params.id)
    return res.status(200).send(shelf)
  } catch (error) {
    res.status(401).json(error)
  }
}

export const createShelf = async (req: Request, res: Response) => {
  try {
    const shelf: Shelf = {
      shelf_number: req.body.shelf_number,
      shelf_name: req.body.shelf_name,
      block_id: req.body.block_id,
      created_date: new Date(),
      updated_date: new Date(),
      id: undefined as unknown as number
    }

    const newShelf = await library.create(shelf)
    return res.status(200).json(newShelf)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

export const deleteShelf = async (req: Request, res: Response) => {
  try {
    const deletedShelf = await library.delete(+req.params.id)
    return res.status(200).send(deletedShelf)
  } catch (error) {
    console.log(error)
    res.status(401).json(error)
  }
}

export const updateShelf = async (req: Request, res: Response) => {
  try {
    const shelf = {
      id: +req.params.id,
      shelf_number: req.body.shelf_number,
      shelf_name: req.body.shelf_name,
      block_id: req.body.block_id,
      created_date: new Date(),
      updated_date: new Date()
    }

    const updated = await library.update(shelf)
    // const token = jwt.sign(updated, process.env.TOKEN_SECRET as string)
    return res.status(200).json(updated)
  } catch (error) {
    console.log(error)
    res.status(401).json(error)
  }
}
