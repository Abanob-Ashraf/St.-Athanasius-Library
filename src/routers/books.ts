import { Router } from 'express'
import { authorize } from '../middlewares/authantication'
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBookById,
  getBookByName,
  updateBook
} from '../controllers/books'

const routes = Router()

routes.get('/books', authorize, getAllBooks)

routes.get('/books/name', authorize, getBookByName)

routes.get('/books/:id', authorize, getBookById)

routes.post('/books', authorize, createBook)

routes.put('/books/:id', authorize, updateBook)

routes.delete('/books/:id', authorize, deleteBook)

export default routes
