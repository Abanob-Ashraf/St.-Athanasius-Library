import { Request, Response, NextFunction } from 'express'
import { Shelf, ShelfsModel } from '../models/shelfs'

const library = new ShelfsModel()

export const createShelf = async (req: Request, res: Response, next: NextFunction) => {
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
    res.json({
      status: 'success',
      data: { ...newShelf },
      message: 'Shelf created successfully'
    })
  } catch (error) {
    next(error)
  }
}

export const getAllShelfs = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const shelfs = await library.index()
    res.json({
      status: 'success',
      data: shelfs,
      message: 'Shelfs retrieved successfully'
    })
  } catch (error) {
    next(error)
  }
}

export const getShelf = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const shelf = await library.show(+req.params.id)
    res.json({
      status: 'success',
      data: shelf,
      message: 'Shelf retrieved successfully'
    })
  } catch (error) {
    next(error)
  }
}
export const updateShelf = async (req: Request, res: Response, next: NextFunction) => {
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
    res.json({
      status: 'success',
      data: updated,
      message: 'Sjelf updated successfully'
    })
  } catch (error) {
    next(error)
  }
}

export const deleteShelf = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deletedShelf = await library.delete(+req.params.id)
    res.json({
      status: 'success',
      data: deletedShelf,
      message: 'Shelf deleted successfully'
    })
  } catch (error) {
    next(error)
  }
}
