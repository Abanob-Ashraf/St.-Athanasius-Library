import converter from 'json-2-csv'
import fs from 'fs'
import { Request, Response } from 'express'
import { UsersModel } from '../models/users'
import { BlocksModel } from '../models/blocks'
import { ShelfsModel } from '../models/shelfs'
import { BooksModel } from '../models/books'

const userLibrary = new UsersModel()
const blockLibrary = new BlocksModel()
const shelfLibrary = new ShelfsModel()
const bookLibrary = new BooksModel()

// Full Backup
export const fullBackup = async (_req: Request, res: Response) => {
  try {
    //Backup users table
    const users = await userLibrary.getManyUsers()
    converter.json2csv(users['userInfo'], (err, userDataAsCSV) => {
      if (err) {
        throw err
      }
      if (userDataAsCSV != undefined) {
        // modify the data to be a compatible for database when recover
        const newCsv = userDataAsCSV.replaceAll(' GMT+0200 (Eastern European Standard Time)', '')
        const finalCsv = newCsv.replaceAll('null', '')
        // write CSV to a file
        fs.writeFileSync(
          'C:/Users/abano/Desktop/library/BackEnd/backup/usersTable.csv',
          finalCsv as string
        )
      }
    })

    //Backup blocks table
    const blocks = await blockLibrary.getManyBlocks()
    converter.json2csv(blocks['blockInfo'], (err, blockDataAsCSV) => {
      if (err) {
        throw err
      }
      if (blockDataAsCSV != undefined) {
        // modify the data to be a compatible for database when recover
        const newCsv = blockDataAsCSV.replaceAll(' GMT+0200 (Eastern European Standard Time)', '')
        const finalCsv = newCsv.replaceAll('null', '')
        // write CSV to a file
        fs.writeFileSync(
          'C:/Users/abano/Desktop/library/BackEnd/backup/blocksTable.csv',
          finalCsv as string
        )
      }
    })

    //Backup shelfs table
    const shelfs = await shelfLibrary.getManyShelfs()
    converter.json2csv(shelfs['shelfInfo'], (err, shelfDataAsCSV) => {
      if (err) {
        throw err
      }
      if (shelfDataAsCSV != undefined) {
        // modify the data to be a compatible for database when recover
        const newCsv = shelfDataAsCSV.replaceAll(' GMT+0200 (Eastern European Standard Time)', '')
        const finalCsv = newCsv.replaceAll('null', '')
        // write CSV to a file
        fs.writeFileSync(
          'C:/Users/abano/Desktop/library/BackEnd/backup/shelfsTable.csv',
          finalCsv as string
        )
      }
    })

    //Backup books table
    const books = await bookLibrary.getManyBooks()
    converter.json2csv(books['bookInfo'], (err, bookDataAsCSV) => {
      if (err) {
        throw err
      }
      if (bookDataAsCSV != undefined) {
        // modify the data to be a compatible for database when recover
        const newCsv = bookDataAsCSV.replaceAll(' GMT+0200 (Eastern European Standard Time)', '')
        const finalCsv = newCsv.replaceAll('null', '')

        // write CSV to a file
        fs.writeFileSync(
          'C:/Users/abano/Desktop/library/BackEnd/backup/booksTable.csv',
          finalCsv as string
        )
      }
    })

    res.status(books['status']).json(books['message'])
  } catch (error) {
    res.status(400).json(error)
  }
}
