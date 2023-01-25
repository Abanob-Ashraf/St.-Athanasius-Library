import converter from 'json-2-csv'
import fs from 'fs'
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
    res.status(newShelf['status']).json(newShelf['message'])
  } catch (error) {
    res.status(409).json('this shelf already existe')
  }
}

// getManyShelfs
export const getManyShelfs = async (_req: Request, res: Response) => {
  try {
    const shelfs = await library.getManyShelfs()
    res.status(shelfs['status']).json(shelfs['shelfInfo'])
  } catch (error) {
    res.status(401).json(error)
  }
}

// getOneShelf
export const getOneShelf = async (req: Request, res: Response) => {
  try {
    const shelf = await library.getOneShelf(+req.params.id)
    res.status(shelf['status']).json(shelf['shelfInfo'])
  } catch (error) {
    res.status(401).json(error)
  }
}

// getShelfsWithBlockId
export const getShelfsWithBlockId = async (req: Request, res: Response) => {
  try {
    const shelfs = await library.getShelfsWithBlockId(+req.params.id)
    res.status(shelfs['status']).json(shelfs['shelfInfo'])
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
    res.status(updatedShelf['status']).json(updatedShelf['message'])
  } catch (error) {
    res.status(409).json('this shelf already existe')
  }
}

// getAllShelfsForBackup
export const getAllShelfsForBackup = async (_req: Request, res: Response) => {
  try {
    const shelfs = await library.getManyShelfs()
    // console.log(shelfs['shelfInfo'])

    converter.json2csv(shelfs['shelfInfo'], (err, shelfsDataAsCSV) => {
      if (err) {
        throw err
      }
      if (shelfsDataAsCSV != undefined) {
        // modify the data to be a compatible for database when recover
        const newCsv = shelfsDataAsCSV.replaceAll(' GMT+0200 (Eastern European Standard Time)', '')
        const finalCsv = newCsv.replaceAll('null', '')

        // write CSV to a file
        fs.writeFileSync(
          'C:/Users/abano/Desktop/library/BackEnd/backup/shelfsTable.csv',
          finalCsv as string
        )
      }
    })

    res.status(shelfs['status']).json(shelfs['message'])
  } catch (error) {
    res.status(400).json(error)
  }
}

// deleteShelf
// export const deleteShelf = async (req: Request, res: Response) => {
//   try {
//     const deletedShelf = await library.deleteShelf(+req.params.id)
//     res.status(deletedShelf['status']).json(deletedShelf['message'])
//   } catch (error) {
//     res.status(401).json(error)
//   }
// }
