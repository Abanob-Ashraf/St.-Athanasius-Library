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
      number_of_copies: req.body.number_of_copies,
      number_of_pages: req.body.number_of_pages,
      number_of_parts: req.body.number_of_parts,
      name_of_series: req.body.name_of_series,
      conclusion: req.body.conclusion,
      user_id: userId,
      old_user: req.body.user_id,
      shelf_id: req.body.shelf_id,
      book_number_in_shelf: req.body.book_number_in_shelf,
      created_date: new Date(),
      updated_date: new Date(),
      id: undefined as unknown as number
    }

    const newBook = await library.createBook(book)
    res.status(200).json(newBook)
  } catch (error) {
    res.status(400).json(error)
  }
}

// getManyShelfs
export const getManyBooks = async (_req: Request, res: Response) => {
  try {
    const books = await library.getManyBooks()
    res.status(200).json(books)
  } catch (error) {
    res.status(400).json(error)
  }
}

export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await library.getOneBookById(+req.params.id)
    if (book == null) {
      return res.status(404).json('Book was not found')
    } else {
      return res.send(book)
    }
  } catch (error) {
    res.status(401).json(error)
  }
}

export const getBookByName = async (req: Request, res: Response) => {
  try {
    const book = await library.getOneBookByName(req.body.book_name)
    if (book == null) {
      return res.status(404).json('Book was not found')
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
    const userId = decode.user.id

    const getUserBook = await library.getOneBookById(+req.params.id)
    if (getUserBook == null) {
      return res.status(404).json('Book was not found')
    }
    const isId = getUserBook['user_id']
    if (userId == isId) {
      const book = {
        id: +req.params.id,
        book_code: req.body.book_code,
        book_name: req.body.book_name,
        author: req.body.author,
        number_of_copies: req.body.number_of_copies,
        number_of_pages: req.body.number_of_pages,
        number_of_parts: req.body.number_of_parts,
        name_of_series: req.body.name_of_series,
        conclusion: req.body.conclusion,
        user_id: userId,
        old_user: req.body.old_user,
        shelf_id: req.body.shelf_id,
        book_number_in_shelf: req.body.book_number_in_shelf,
        created_date: new Date(),
        updated_date: new Date()
      }

      const updatedBook = await library.updateBook(book)
      return res.send(updatedBook)
    } else {
      return res.status(401).json('you cant edite this book')
    }
  } catch (error) {
    res.status(401).json(error)
  }
}

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const deletedBook = await library.deleteBook(+req.params.id)
    if (deletedBook == null) {
      return res.status(404).json('Book was not found')
    } else {
      return res.send(deletedBook)
    }
  } catch (error) {
    res.status(401).json(error)
  }
}
