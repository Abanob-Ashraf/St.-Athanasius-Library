import converter from 'json-2-csv'
import fs from 'fs'
import { Request, Response } from 'express'
import { Library, LibrarysModel } from '../models/librarys'

const library_type = new LibrarysModel()

// createLibrary
export const createLibrary = async (req: Request, res: Response) => {
  try {
    const library: Library = {
      library_name: req.body.library_name,
      created_date: new Date(),
      updated_date: new Date(),
      id: undefined as unknown as string
    }
    const newLibrary = await library_type.createLibrary(library)
    res.status(newLibrary['status']).json(newLibrary['message'])
  } catch (error) {
    res.status(409).json('this library already existe')
  }
}

// getManyLibrarys
export const getManyLibrarys = async (_req: Request, res: Response) => {
  try {
    const librarys = await library_type.getManyLibrarys()
    res.status(librarys['status']).json(librarys['libraryInfo'])
  } catch (error) {
    res.status(400).json(error)
  }
}

// getOneLibrary
export const getOneLibrary = async (req: Request, res: Response) => {
  try {
    const library = await library_type.getOneLibrary(req.params.id)
    res.status(library['status']).json(library['libraryInfo'])
  } catch (error) {
    res.status(401).json(error)
  }
}

// updateLibrary
export const updateLibrary = async (req: Request, res: Response) => {
  try {
    const library = {
      id: req.params.id,
      library_name: req.body.library_name,
      created_date: new Date(),
      updated_date: new Date()
    }
    const updatedLibrary = await library_type.updateLibrary(library)
    res.status(updatedLibrary['status']).json(updatedLibrary['message'])
  } catch (error) {
    res.status(409).json('this library already existe')
  }
}

// getAllLibrarysForBackup
export const getAllLibrarysForBackup = async (_req: Request, res: Response) => {
  try {
    const librarys = await library_type.getManyLibrarys()
    // console.log(librarys['libraryInfo'])

    converter.json2csv(librarys['libraryInfo'], (err, librarysDataAsCSV) => {
      if (err) {
        throw err
      }
      if (librarysDataAsCSV != undefined) {
        // modify the data to be a compatible for database when recover
        const newCsv = librarysDataAsCSV.replaceAll(
          ' GMT+0200 (Eastern European Standard Time)',
          ''
        )
        const finalCsv = newCsv.replaceAll('null', '')

        const dir = __dirname + '../../../backup/'
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir)
        }
        // write CSV to a file
        fs.writeFileSync(dir + 'librarysTable.csv', finalCsv as string)
      }
    })

    res.status(librarys['status']).json(librarys['message'])
  } catch (error) {
    res.status(400).json(error)
  }
}

// // deleteLibrary
// export const deleteLibrary = async (req: Request, res: Response) => {
//   try {
//     const deletedLibrary = await library_type.deleteLibrary(req.params.id)
//     if (typeof deletedLibrary == 'string') {
//       return res.status(404).json(deletedLibrary)
//     }
//   } catch (error) {
//     res.status(401).json(error)
//   }
// }
