import { Request, Response } from 'express'
import { Book, BooksModel } from '../models/books'

const library = new BooksModel()

export const createBook = async (req: Request, res: Response) => {
  try {
    const book: Book = {
      book_code: req.body.book_code,
      book_name: req.body.book_name,
      author: req.body.author,
      number_of_copies: req.body.number_of_copies,
      number_of_pages: req.body.number_of_pages,
      number_of_parts: req.body.number_of_parts,
      name_of_series: req.body.name_of_series,
      conclusion: req.body.conclusion,
      user_id: req.body.user_id,
      shelf_id: req.body.shelf_id,
      book_number_in_shelf: req.body.book_number_in_shelf,
      created_date: new Date(),
      updated_date: new Date(),
      id: undefined as unknown as number
    }

    const newBook = await library.create(book)
    return res.status(200).json(newBook)
  } catch (error) {
    res.status(400).json(error)
  }
}

export const getAllBooks = async (_req: Request, res: Response) => {
  try {
    const books = await library.index()
    return res.status(200).send(books)
  } catch (error) {
    res.status(401).json(error)
  }
}

export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await library.showById(+req.params.id)
    return res.status(200).send(book)
  } catch (error) {
    res.status(401).json(error)
  }
}

export const getBookByName = async (req: Request, res: Response) => {
  try {
    const book = await library.showByName(req.body.book_name)
    return res.status(200).send(book)
  } catch (error) {
    res.status(401).json(error)
  }
}

export const updateBook = async (req: Request, res: Response) => {
  try {
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
      user_id: req.body.user_id,
      shelf_id: req.body.shelf_id,
      book_number_in_shelf: req.body.book_number_in_shelf,
      created_date: new Date(),
      updated_date: new Date()
    }

    const updated = await library.update(book)
    // const token = jwt.sign(updated, process.env.TOKEN_SECRET as string)
    return res.status(200).json(updated)
  } catch (error) {
    res.status(401).json(error)
  }
}

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const deletedBook = await library.delete(+req.params.id)
    return res.status(200).send(deletedBook)
  } catch (error) {
    res.status(401).json(error)
  }
}
