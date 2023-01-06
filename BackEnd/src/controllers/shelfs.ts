import { Request, Response } from 'express'
import { Shelf, ShelfsModel } from '../models/shelfs'

const library = new ShelfsModel()

// createShelf
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
    const newShelf = await library.createShelf(shelf)
    if (typeof newShelf == 'string') {
      return res.status(200).json(newShelf)
    }
  } catch (error) {
    res.status(400).json(error)
  }
}

// getManyShelfs
export const getManyShelfs = async (_req: Request, res: Response) => {
  try {
    const shelfs = await library.getManyShelfs()
    res.status(200).json(shelfs)
  } catch (error) {
    res.status(401).json(error)
  }
}

// getOneShelf
export const getOneShelf = async (req: Request, res: Response) => {
  try {
    const shelf = await library.getOneShelf(+req.params.id)
    if (typeof shelf == 'string') {
      return res.status(404).json(shelf)
    } else {
      return res.send(shelf)
    }
  } catch (error) {
    res.status(401).json(error)
  }
}

// getShelfsWithBlockId
export const getShelfsWithBlockId = async (req: Request, res: Response) => {
  try {
    const shelf = await library.getShelfsWithBlockId(+req.params.id)
    if (typeof shelf == 'string') {
      return res.status(404).json(shelf)
    } else {
      return res.send(shelf)
    }
  } catch (error) {
    res.status(401).json(error)
  }
}

// updateShelf
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
    const updatedShelf = await library.updateShelf(shelf)
    if (typeof updatedShelf == 'string') {
      return res.status(404).json(updatedShelf)
    }
  } catch (error) {
    res.status(401).json(error)
  }
}

// // deleteShelf
// export const deleteShelf = async (req: Request, res: Response) => {
//   try {
//     const deletedShelf = await library.deleteShelf(+req.params.id)
//     if (typeof deletedShelf == 'string') {
//       return res.status(404).json(deletedShelf)
//     }
//   } catch (error) {
//     res.status(401).json(error)
//   }
// }
