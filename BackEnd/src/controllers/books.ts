import converter from 'json-2-csv'
import fs from 'fs'
import { Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { Book, BooksModel } from '../models/books'
import { ShelfsModel } from '../models/shelfs'
import { BlocksModel } from '../models/blocks'

const shelfLibrary = new ShelfsModel()
const blockLibrary = new BlocksModel()

const library = new BooksModel()

// createBook
export const createBook = async (req: Request, res: Response) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '') as string
    const decode = jwt.verify(token, process.env.TOKEN_SECRET as unknown as string) as JwtPayload
    const userId = decode.user.id

    const shelfData = await shelfLibrary.getOneShelf(req.body.shelf_id)

    const shelfInfo = shelfData['shelfInfo']
    const shelfNum = shelfInfo['shelf_number']

    const blockId = shelfInfo['block_id']
    const blockData = await blockLibrary.getOneBlock(blockId)

    const blockInfo = blockData['blockInfo']
    const blockNum = blockInfo['block_number']

    const book: Book = {
      book_code: `${blockNum}-${shelfNum}-${req.body.book_number_in_shelf}`,
      book_name: req.body.book_name,
      author: req.body.author,
      publisher: req.body.publisher,
      topic: req.body.topic,
      number_of_copies: req.body.number_of_copies,
      number_of_pages: req.body.number_of_pages,
      number_of_parts: req.body.number_of_parts,
      name_of_series: req.body.name_of_series,
      conclusion: req.body.conclusion,
      currrent_user: userId,
      old_user: req.body.user_id,
      shelf_id: req.body.shelf_id,
      book_number_in_shelf: req.body.book_number_in_shelf,
      who_edited: req.body.who_edited,
      created_date: new Date(),
      updated_date: new Date(),
      id: undefined as unknown as number
    }

    const newBook = await library.createBook(book)
    res.status(newBook['status']).json(newBook['message'])
  } catch (error) {
    res.status(409).json('this book already existe')
  }
}

// getManyBooks
export const getManyBooks = async (_req: Request, res: Response) => {
  try {
    const books = await library.getManyBooks()
    res.status(books['status']).json(books['bookInfo'])
  } catch (error) {
    res.status(400).json(error)
  }
}

// getLatestBooks
export const getLatestBooks = async (_req: Request, res: Response) => {
  try {
    const books = await library.getLatestBooks()
    res.status(books['status']).json(books['bookInfo'])
  } catch (error) {
    res.status(400).json(error)
  }
}

export const getOneBook = async (req: Request, res: Response) => {
  try {
    const book = await library.getOneBook(+req.params.id)
    res.status(book['status']).json(book['bookInfo'])
  } catch (error) {
    res.status(401).json(error)
  }
}

export const searchForBook = async (req: Request, res: Response) => {
  try {
    const book = await library.searchForBook(
      req.query.book_name as string,
      req.query.author as string,
      req.query.publisher as string,
      req.query.topic as string
    )
    res.status(book['status']).json(book['bookInfo'])
  } catch (error) {
    res.status(401).json(error)
  }
}

export const searchForBookWithBlockOrShelfAndBlock = async (req: Request, res: Response) => {
  try {
    const book = await library.searchForBookWithBlockOrShelfAndBlock(
      req.query.block_number as string,
      req.query.shelf_number as string
    )
    return res.status(book['status']).json(book['bookInfo'])
  } catch (error) {
    res.status(400).json(error)
  }
}

export const countBooksInBlockOrShelfAndBlock = async (req: Request, res: Response) => {
  try {
    const book = await library.searchForBookWithBlockOrShelfAndBlock(
      req.query.block_number as string,
      req.query.shelf_number as string
    )
    return res.status(book['status']).json(`عدد الكتب ${book['length']}`)
  } catch (error) {
    res.status(401).json(error)
  }
}

export const getUserBooks = async (req: Request, res: Response) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '') as string
    const decode = jwt.verify(token, process.env.TOKEN_SECRET as unknown as string) as JwtPayload
    const userId = decode.user.id
    const book = await library.getUserBooks(userId)
    res.status(book['status']).json(book['bookInfo'])
  } catch (error) {
    res.status(401).json(error)
  }
}

export const updateBook = async (req: Request, res: Response) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '') as string
    const decode = jwt.verify(token, process.env.TOKEN_SECRET as unknown as string) as JwtPayload
    const userWhoLoged = decode.user.id
    const adminRole = decode.user.admin_flag

    const getUserBook = await library.getOneBook(+req.params.id)
    if (getUserBook['bookInfo'] == 'book was not found') {
      return res.status(getUserBook['status']).json(getUserBook['bookInfo'])
    }
    const bookInfo = getUserBook['bookInfo']
    const currentUser = bookInfo['currrent_user']

    const shelfData = await shelfLibrary.getOneShelf(req.body.shelf_id)

    const shelfInfo = shelfData['shelfInfo']
    const shelfNum = shelfInfo['shelf_number']

    const blockId = shelfInfo['block_id']
    const blockData = await blockLibrary.getOneBlock(blockId)

    const blockInfo = blockData['blockInfo']
    const blockNum = blockInfo['block_number']

    if (userWhoLoged == currentUser) {
      const book = {
        id: +req.params.id,
        book_code: `${blockNum}-${shelfNum}-${req.body.book_number_in_shelf}`,
        book_name: req.body.book_name,
        author: req.body.author,
        publisher: req.body.publisher,
        topic: req.body.topic,
        number_of_copies: req.body.number_of_copies,
        number_of_pages: req.body.number_of_pages,
        number_of_parts: req.body.number_of_parts,
        name_of_series: req.body.name_of_series,
        conclusion: req.body.conclusion,
        currrent_user: userWhoLoged,
        old_user: req.body.old_user,
        shelf_id: req.body.shelf_id,
        book_number_in_shelf: req.body.book_number_in_shelf,
        who_edited: userWhoLoged,
        created_date: new Date(),
        updated_date: new Date()
      }
      const updatedBook = await library.updateBook(book)
      return res.status(updatedBook['status']).json(updatedBook['message'])
    }
    if (adminRole) {
      const book = {
        id: +req.params.id,
        book_code: `${blockNum}-${shelfNum}-${req.body.book_number_in_shelf}`,
        book_name: req.body.book_name,
        author: req.body.author,
        publisher: req.body.publisher,
        topic: req.body.topic,
        number_of_copies: req.body.number_of_copies,
        number_of_pages: req.body.number_of_pages,
        number_of_parts: req.body.number_of_parts,
        name_of_series: req.body.name_of_series,
        conclusion: req.body.conclusion,
        currrent_user: currentUser,
        old_user: req.body.old_user,
        shelf_id: req.body.shelf_id,
        book_number_in_shelf: req.body.book_number_in_shelf,
        who_edited: userWhoLoged,
        created_date: new Date(),
        updated_date: new Date()
      }
      const updatedBook = await library.updateBook(book)
      return res.status(updatedBook['status']).json(updatedBook['message'])
    } else {
      return res.status(401).json(`you can't edite this book`)
    }
  } catch (error) {
    res.status(409).json('this book already existe')
  }
}

// getAllBooksForBackup
export const getAllBooksForBackup = async (_req: Request, res: Response) => {
  try {
    const books = await library.getManyBooks()
    // console.log(books['bookInfo'])

    converter.json2csv(books['bookInfo'], (err, booksDataAsCSV) => {
      if (err) {
        throw err
      }
      if (booksDataAsCSV != undefined) {
        // modify the data to be a compatible for database when recover
        const newCsv = booksDataAsCSV.replaceAll(' GMT+0200 (Eastern European Standard Time)', '')
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

// export const deleteBook = async (req: Request, res: Response) => {
//   try {
//     const deletedBook = await library.deleteBook(+req.params.id)
//     res.status(deletedBook['status']).json(deletedBook['message'])
//   } catch (error) {
//     res.status(401).json(error)
//   }
// }
