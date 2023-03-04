import Client from '../database'
import {
  CREATEBOOK,
  UPDATEBOOK,
  GETONEBOOKBYID,
  // DELETEBOOK,
  GETMANYBOOKS,
  SEARCHFORBOOK,
  CHECKIFBOOKINTHISSHELF,
  GETMYBOOKS,
  GETLATESTBOOKS
  // SEARCHFORBOOKWITH_BLOCKORSHELFANDBLOCK
} from '../sql-queries/books'

export type Book = {
  id: string
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
  currrent_user: string
  old_user: string
  shelf_id: string
  book_number_in_shelf: number
  who_edited: string
  created_date: Date
  updated_date: Date
  entry_date: Date
  publish_date: Date
}

export class BooksModel {
  // createBook
  async createBook(b: Book): Promise<object> {
    try {
      const connection = await Client.connect()
      const test = await connection.query(CHECKIFBOOKINTHISSHELF, [
        b.shelf_id,
        b.book_number_in_shelf
      ])
      if (!test.rows.length) {
        await connection.query(CREATEBOOK, [
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
          b.updated_date,
          b.entry_date,
          b.publish_date
        ])
        connection.release()
        const obj = {
          status: 201,
          message: 'book created correctly'
        }
        return obj
      }
      connection.release()
      const error = {
        status: 409,
        message: 'Error you have a book in this rank'
      }
      return error
    } catch (error) {
      throw new Error(`Unable to create ${b.book_name}, ${(error as Error).message}`)
    }
  }

  // getManyBooks
  async getManyBooks(): Promise<object> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETMANYBOOKS)
      const book = { status: 200, bookInfo: result.rows, message: 'backup completed' }
      connection.release()
      return book
    } catch (error) {
      throw new Error(`Unable to get books, ${(error as Error).message}`)
    }
  }

  // getLatestBooks
  async getLatestBooks(): Promise<object> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETLATESTBOOKS)
      const book = { status: 200, bookInfo: result.rows }
      connection.release()
      return book
    } catch (error) {
      throw new Error(`Unable to get books, ${(error as Error).message}`)
    }
  }

  // getOneBook
  async getOneBook(id: string): Promise<object> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETONEBOOKBYID, [id])
      if (result.rows.length) {
        const book = { status: 200, bookInfo: result.rows[0] }
        connection.release()
        return book
      }
      connection.release()
      const error = {
        status: 404,
        bookInfo: 'book was not found'
      }
      return error
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
  ): Promise<object> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(SEARCHFORBOOK, [book_name, author, publisher, topic])
      if (result.rows.length) {
        const book = { status: 200, bookInfo: result.rows }
        connection.release()
        return book
      }
      connection.release()
      const error = {
        status: 404,
        bookInfo: 'book was not found'
      }
      return error
    } catch (error) {
      throw new Error(`Unable to get book ${book_name}, ${(error as Error).message}`)
    }
  }

  // searchForBookWithBlockOrShelfAndBlock
  async searchForBookWithBlockOrShelfAndBlock(block_id: string, shelf_id: string): Promise<object> {
    try {
      const connection = await Client.connect()
      let SEARCHFORBOOKWITH_BLOCKORSHELFANDBLOCK = `SELECT books.id, books.book_code, books.book_name, books.author, books.publisher, 
      books.topic, books.number_of_copies, books.number_of_pages, books.number_of_parts, books.name_of_series, books.conclusion, 
      books.currrent_user, books.old_user, books.shelf_id, books.book_number_in_shelf, books.who_edited, books.created_date, books.updated_date 
      FROM books 
      INNER JOIN shelfs 
      ON shelfs.id = books.shelf_id 
      INNER JOIN blocks 
      ON blocks.id = shelfs.block_id 
      WHERE blocks.id='${block_id}'`
      if (shelf_id == null) {
        SEARCHFORBOOKWITH_BLOCKORSHELFANDBLOCK =
          SEARCHFORBOOKWITH_BLOCKORSHELFANDBLOCK +
          `ORDER BY shelfs.shelf_number, books.book_number_in_shelf ASC`
      }
      if (shelf_id != null) {
        SEARCHFORBOOKWITH_BLOCKORSHELFANDBLOCK =
          SEARCHFORBOOKWITH_BLOCKORSHELFANDBLOCK +
          `AND shelfs.id='${shelf_id}' ORDER BY books.book_number_in_shelf ASC`
      }
      const result = await connection.query(SEARCHFORBOOKWITH_BLOCKORSHELFANDBLOCK)
      if (result.rows.length) {
        const book = { status: 202, bookInfo: result.rows, length: result.rows.length }
        connection.release()
        return book
      }
      connection.release()
      const error = {
        status: 404,
        bookInfo: 'block was not found'
      }
      return error
    } catch (error) {
      throw new Error(`Unable to get book ${(error as Error).message}`)
    }
  }

  // getUserBooks
  async getUserBooks(user_id: string): Promise<object> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETMYBOOKS, [user_id])
      if (result.rows.length) {
        const book = { status: 200, bookInfo: result.rows }
        connection.release()
        return book
      }
      connection.release()
      const error = {
        status: 404,
        bookInfo: 'you have not books yet'
      }
      return error
    } catch (error) {
      throw new Error(`Unable to get books, ${(error as Error).message}`)
    }
  }

  // updateBook
  async updateBook(b: Book): Promise<object> {
    try {
      const connection = await Client.connect()
      const testBookinThisRank = await connection.query(CHECKIFBOOKINTHISSHELF, [
        b.shelf_id,
        b.book_number_in_shelf
      ])
      if (!testBookinThisRank.rows.length) {
        await connection.query(UPDATEBOOK, [
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
          b.updated_date,
          b.entry_date,
          b.publish_date
        ])
        connection.release()
        const obj = {
          status: 202,
          message: 'Book updated correctly'
        }
        return obj
      }
      const bookId = testBookinThisRank.rows[0]
      const currentBook = bookId['id']
      if (testBookinThisRank.rows.length && b.id === currentBook) {
        await connection.query(UPDATEBOOK, [
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
          b.updated_date,
          b.entry_date,
          b.publish_date
        ])
        connection.release()
        const obj = {
          status: 202,
          message: 'Book updated correctly'
        }
        return obj
      }
      connection.release()
      const error = {
        status: 409,
        message: 'Error you have a book in this rank'
      }
      return error
    } catch (error) {
      throw new Error(`Unable to update ${b.id}, ${(error as Error).message}`)
    }
  }

  // deleteBook
  // async deleteBook(id: string): Promise<object> {
  //   try {
  //     const connection = await Client.connect()
  //     const test = await connection.query(GETONEBOOKBYID, [id])
  //     if (test.rows.length) {
  //       await connection.query(DELETEBOOK, [id])
  //       connection.release()
  //       const obj = {
  //         status: 202,
  //         message: 'Book deleted correctly'
  //       }
  //       return obj
  //     }
  //     connection.release()
  //     const error = {
  //       status: 404,
  //       message: 'Book was not found'
  //     }
  //     return error
  //   } catch (error) {
  //     throw new Error(`Unable to delete Book ${id}, ${(error as Error).message}`)
  //   }
  // }
}
