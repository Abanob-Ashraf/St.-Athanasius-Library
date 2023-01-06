import { Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { Book, BooksModel } from '../models/books'

const library = new BooksModel()

// createBook
export const createBook = async (req: Request, res: Response) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '') as string
    const decode = jwt.verify(token, process.env.TOKEN_SECRET as unknown as string) as JwtPayload
    const userId = decode.user.id

    const book: Book = {
      book_code: req.body.book_code,
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
    if (typeof newBook == 'string') {
      return res.status(200).json(newBook)
    }
  } catch (error) {
    res.status(400).json(error)
  }
}

// getManyBooks
export const getManyBooks = async (_req: Request, res: Response) => {
  try {
    const books = await library.getManyBooks()
    res.status(200).json(books)
  } catch (error) {
    res.status(400).json(error)
  }
}

// getLatestBooks
export const getLatestBooks = async (_req: Request, res: Response) => {
  try {
    const books = await library.getLatestBooks()
    res.status(200).json(books)
  } catch (error) {
    res.status(400).json(error)
  }
}

export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await library.getOneBookById(+req.params.id)
    if (typeof book == 'string') {
      return res.status(404).json(book)
    } else {
      return res.send(book)
    }
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
    if (typeof book == 'string') {
      return res.status(404).json(book)
    } else {
      return res.send(book)
    }
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
    if (typeof book == 'string') {
      return res.status(404).json(book)
    } else {
      return res.send(book)
    }
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

    const getUserBook = await library.getOneBookById(+req.params.id)
    if (typeof getUserBook == 'string') {
      return res.status(404).json(getUserBook)
    }
    const currentUser = getUserBook['currrent_user']

    if (userWhoLoged == currentUser) {
      const book = {
        id: +req.params.id,
        book_code: req.body.book_code,
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
      if (typeof updatedBook == 'string') {
        return res.status(404).json(updatedBook)
      }
    }
    if (adminRole) {
      const book = {
        id: +req.params.id,
        book_code: req.body.book_code,
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
      if (typeof updatedBook == 'string') {
        return res.status(404).json(updatedBook)
      }
    } else {
      return res.status(401).json(`you can't edite this book`)
    }
  } catch (error) {
    res.status(401).json(error)
  }
}

// export const deleteBook = async (req: Request, res: Response) => {
//   try {
//     const deletedBook = await library.deleteBook(+req.params.id)
//     if (typeof deletedBook == 'string') {
//       return res.status(404).json(deletedBook)
//     }
//   } catch (error) {
//     res.status(401).json(error)
//   }
// }
