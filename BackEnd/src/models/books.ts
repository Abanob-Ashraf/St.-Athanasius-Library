import Client from '../database'
import {
  CREATEBOOK,
  UPDATEBOOK,
  GETONEBOOKBYID,
  DELETEBOOK,
  GETMANYBOOKS,
  SEARCHFORBOOK,
  CHECKIFBOOKINTHISSHELF,
  GETMYBOOKS
} from '../sql-queries/books'

export type Book = {
  id: number
  book_code: string
  book_name: string
  author: string
  publisher: string
  topic: string
  number_of_copies: number
  number_of_pages: number
  number_of_parts: number
  name_of_series: number
  conclusion: string
  currrent_user: number
  old_user: null
  shelf_id: number
  book_number_in_shelf: number
  who_edited: number
  created_date: Date
  updated_date: Date
}

export class BooksModel {
  // createBook
  async createBook(b: Book): Promise<Book | null> {
    try {
      const connection = await Client.connect()
      const test = await connection.query(CHECKIFBOOKINTHISSHELF, [
        b.shelf_id,
        b.book_number_in_shelf
      ])
      if (!test.rows.length) {
        const result = await connection.query(CREATEBOOK, [
          b.book_code,
          b.book_name,
          b.author,
          b.publisher,
          b.topic,
          b.number_of_copies,
          b.number_of_pages,
          b.number_of_parts,
          b.name_of_series,
          b.conclusion,
          b.currrent_user,
          b.old_user,
          b.shelf_id,
          b.book_number_in_shelf,
          b.who_edited,
          b.created_date,
          b.updated_date
        ])
        const book = result.rows[0]
        connection.release()
        return book
      }
      connection.release()
      return null
    } catch (error) {
      throw new Error(`Unable to create ${b.book_name}, ${(error as Error).message}`)
    }
  }

  // getManyBooks
  async getManyBooks(): Promise<Book[]> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETMANYBOOKS)
      const book = result.rows
      connection.release()
      return book
    } catch (error) {
      throw new Error(`Unable to get books, ${(error as Error).message}`)
    }
  }

  // getOneBook
  async getOneBookById(id: number): Promise<Book[]> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETONEBOOKBYID, [id])
      if (result.rows.length) {
        const book = { ...result.rows[0] }
        connection.release()
        return book
      }
      connection.release()
      return result.rows[0]
    } catch (error) {
      throw new Error(`Unable to get book ${id}, ${(error as Error).message}`)
    }
  }

  // getOneBookByName
  async searchForBook(
    book_name: string,
    author: string,
    publisher: string,
    topic: string
  ): Promise<Book[]> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(SEARCHFORBOOK, [book_name, author, publisher, topic])
      if (result.rows.length) {
        const book = { ...result.rows[0] }
        connection.release()
        return book
      }
      connection.release()
      return result.rows[0]
    } catch (error) {
      throw new Error(`Unable to get book ${book_name}, ${(error as Error).message}`)
    }
  }

  // getUserBooks
  async getUserBooks(user_id: number): Promise<Book[] | null> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETMYBOOKS, [user_id])
      if (result.rows.length) {
        const book = result.rows
        connection.release()
        return book
      }
      connection.release()
      return null
    } catch (error) {
      throw new Error(`Unable to get books, ${(error as Error).message}`)
    }
  }

  // updateBook
  async updateBook(b: Book): Promise<Book | null> {
    try {
      const connection = await Client.connect()

      const testBookNotFound = await connection.query(GETONEBOOKBYID, [b.id])
      if (testBookNotFound.rows.length) {
        const testBookinThisRank = await connection.query(CHECKIFBOOKINTHISSHELF, [
          b.shelf_id,
          b.book_number_in_shelf
        ])
        if (!testBookinThisRank.rows.length) {
          const result = await connection.query(UPDATEBOOK, [
            b.id,
            b.book_code,
            b.book_name,
            b.author,
            b.publisher,
            b.topic,
            b.number_of_copies,
            b.number_of_pages,
            b.number_of_parts,
            b.name_of_series,
            b.conclusion,
            b.currrent_user,
            b.old_user,
            b.shelf_id,
            b.book_number_in_shelf,
            b.who_edited,
            b.updated_date
          ])
          const book = result.rows[0]
          connection.release()
          return book
        }

        const bookId = testBookinThisRank.rows[0]
        const currentBook = bookId['id']
        if (testBookinThisRank.rows.length && b.id === currentBook) {
          const result = await connection.query(UPDATEBOOK, [
            b.id,
            b.book_code,
            b.book_name,
            b.author,
            b.publisher,
            b.topic,
            b.number_of_copies,
            b.number_of_pages,
            b.number_of_parts,
            b.name_of_series,
            b.conclusion,
            b.currrent_user,
            b.old_user,
            b.shelf_id,
            b.book_number_in_shelf,
            b.who_edited,
            b.updated_date
          ])
          const book = result.rows[0]
          connection.release()
          return book
        }
        connection.release()
        return null
      }
      connection.release()
      return testBookNotFound.rows[0]
    } catch (error) {
      throw new Error(`Unable to update ${b.id}, ${(error as Error).message}`)
    }
  }

  // deleteBook
  async deleteBook(id: number): Promise<Book> {
    try {
      const connection = await Client.connect()
      const test = await connection.query(GETONEBOOKBYID, [id])
      if (test.rows.length) {
        const result = await connection.query(DELETEBOOK, [id])
        connection.release()
        return result.rows[0]
      }
      connection.release()
      return test.rows[0]
    } catch (error) {
      throw new Error(`Unable to delete Book ${id}, ${(error as Error).message}`)
    }
  }
}
