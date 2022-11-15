import Client from '../database'
import {
  createBook,
  updateBook,
  getSingleBookById,
  deleteBook,
  getAllBooks,
  getSingleBookByName
} from '../sql-queries/books'

export type Book = {
  id: number
  book_code: string
  book_name: string
  author: string
  number_of_copies: number
  number_of_pages: number
  number_of_parts: number
  name_of_series: number
  conclusion: string
  user_id: number
  shelf_id: number
  book_number_in_shelf: number
  created_date: Date
  updated_date: Date
}

export class BooksModel {
  //createBook
  async create(b: Book): Promise<Book> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(createBook, [
        b.book_code,
        b.book_name,
        b.author,
        b.number_of_copies,
        b.number_of_pages,
        b.number_of_parts,
        b.name_of_series,
        b.conclusion,
        b.user_id,
        b.shelf_id,
        b.book_number_in_shelf,
        b.created_date,
        b.updated_date
      ])
      const book = result.rows[0]
      connection.release()
      return book
    } catch (error) {
      throw new Error(`Unable to create ${b.book_name} error: ${error}`)
    }
  }

  //getAllBooks
  async index(): Promise<Book[]> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(getAllBooks)
      const book = result.rows
      connection.release()
      return book
    } catch (error) {
      throw new Error(`Unable to get books error: ${error}`)
    }
  }

  //getBookById
  async showById(id: number): Promise<Book[]> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(getSingleBookById, [id])
      const book = { ...result.rows[0] }
      connection.release()
      return book
    } catch (error) {
      throw new Error(`Unable to get book ${id} error: ${error}`)
    }
  }

  //getBookByName
  async showByName(book_name: string): Promise<Book[]> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(getSingleBookByName, [book_name])
      const book = { ...result.rows[0] }
      connection.release()
      return book
    } catch (error) {
      throw new Error(`Unable to get book ${book_name} error: ${error}`)
    }
  }

  //updateBook
  async update(b: Book): Promise<Book> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(updateBook, [
        b.id,
        b.book_code,
        b.book_name,
        b.author,
        b.number_of_copies,
        b.number_of_pages,
        b.number_of_parts,
        b.name_of_series,
        b.conclusion,
        b.user_id,
        b.shelf_id,
        b.book_number_in_shelf,
        b.updated_date
      ])
      const book = result.rows[0]
      connection.release()
      return book
    } catch (error) {
      throw new Error(`Unable to update ${b.id} error: ${error}`)
    }
  }

  //deleteBook
  async delete(id: number): Promise<Book> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(deleteBook, [id])
      connection.release()
      return result.rows[0]
    } catch (error) {
      throw new Error(`Unable to delete user ${id} error: ${error}`)
    }
  }
}
