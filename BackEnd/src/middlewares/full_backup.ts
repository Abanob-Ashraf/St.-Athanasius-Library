import converter from 'json-2-csv'
import JSZip from 'jszip'
import * as fs from 'fs'
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
    const dir = __dirname + '../../../backup/'
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }

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
        fs.writeFileSync(dir + 'usersTable.csv', finalCsv as string)
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
        fs.writeFileSync(dir + 'blocksTable.csv', finalCsv as string)
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
        fs.writeFileSync(dir + 'shelfsTable.csv', finalCsv as string)
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
        fs.writeFileSync(dir + 'booksTable.csv', finalCsv as string)
      }
    })
    // make a zip file contain a csv files
    if (books['status'] == 200) {
      const zip = new JSZip()
      //put a setTimeout to wait the folder created and then creat a zip file
      setTimeout(() => {
        try {
          const userData = fs.readFileSync(dir + 'usersTable.csv')
          zip.file('usersTable.csv', userData)
          const blockData = fs.readFileSync(dir + 'blocksTable.csv')
          zip.file('blocksTable.csv', blockData)
          const shelfData = fs.readFileSync(dir + 'shelfsTable.csv')
          zip.file('shelfsTable.csv', shelfData)
          const bookData = fs.readFileSync(dir + 'booksTable.csv')
          zip.file('booksTable.csv', bookData)

          zip
            .generateNodeStream({ type: 'nodebuffer', streamFiles: true })
            .pipe(fs.createWriteStream('backup.zip'))
            .on('finish', function () {
              //Delete folder after zip file created
              fs.rmSync(dir, { recursive: true, force: true })
              res
                .status(books['status'])
                .json({ message01: books['message'], message02: 'zip file created' })
            })
        } catch (error) {
          res.status(400).json(error)
        }
      })
    }
  } catch (error) {
    res.status(400).json(error)
  }
}
