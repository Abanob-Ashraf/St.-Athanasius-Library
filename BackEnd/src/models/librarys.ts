import Client from '../database'
import {
  CREATELIBRARY,
  UPDATELIBRARY,
  GETONELIBRARY,
  // DELETELIBRARY,
  GETMANYLIBRARYS
} from '../sql-queries/librarys'

export type Library = {
  id: string
  library_name: string
  created_date: Date
  updated_date: Date
}

export class LibrarysModel {
  // createLibrary
  async createLibrary(ly: Library): Promise<object> {
    try {
      const connection = await Client.connect()
      await connection.query(CREATELIBRARY, [ly.library_name, ly.created_date, ly.updated_date])
      connection.release()
      const obj = {
        status: 201,
        message: 'library created correctly'
      }
      return obj
    } catch (error) {
      throw new Error(`Unable to create ${ly.library_name}, ${(error as Error).message}`)
    }
  }

  // getManyLibrarys
  async getManyLibrarys(): Promise<object> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETMANYLIBRARYS)
      const library = { status: 200, libraryInfo: result.rows, message: 'backup completed' }
      connection.release()
      return library
    } catch (error) {
      throw new Error(`Unable to get librarys, ${(error as Error).message}`)
    }
  }

  // getOneLibrary
  async getOneLibrary(id: string): Promise<object> {
    try {
      const connection = await Client.connect()
      const result = await connection.query(GETONELIBRARY, [id])
      if (result.rows.length) {
        const library = { status: 200, libraryInfo: result.rows[0] }
        connection.release()
        return library
      }
      connection.release()
      const error = {
        status: 404,
        libraryInfo: 'library was not found'
      }
      return error
    } catch (error) {
      throw new Error(`Unable to get library ${id}, ${(error as Error).message}`)
    }
  }

  // updateLibrary
  async updateLibrary(bl: Library): Promise<object> {
    try {
      const connection = await Client.connect()
      const test = await connection.query(GETONELIBRARY, [bl.id])
      if (test.rows.length) {
        await connection.query(UPDATELIBRARY, [bl.id, bl.library_name, bl.updated_date])
        connection.release()
        const obj = {
          status: 202,
          message: 'library updated correctly'
        }
        return obj
      }
      connection.release()
      const error = {
        status: 404,
        message: 'library was not found'
      }
      return error
    } catch (error) {
      throw new Error(`Unable to update ${bl.library_name}, ${(error as Error).message}`)
    }
  }

  // // deleteLibrary
  // async deleteLibrary(id: string): Promise<Library | string> {
  //   try {
  //     const connection = await Client.connect()
  //     const test = await connection.query(GETONELIBRARY, [id])
  //     if (test.rows.length) {
  //       await connection.query(DELETELIBRARY, [id])
  //       connection.release()
  //       return 'deleted library correctly'
  //     }
  //     connection.release()
  //     return 'library not found'
  //   } catch (error) {
  //     throw new Error(`Unable to delete library ${id}, ${(error as Error).message}`)
  //   }
  // }
}
