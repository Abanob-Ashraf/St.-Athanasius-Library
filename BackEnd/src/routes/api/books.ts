import { Router } from 'express'
import { authorize } from '../../middlewares/authantication'
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBookById,
  getBookByName,
  updateBook
} from '../../controllers/books'

const routes = Router()

routes.route('/').post(authorize, createBook)

routes.route('/').get(authorize, getAllBooks)

routes.route('/name').get(authorize, getBookByName)

routes.route('/:id').get(authorize, getBookById)

routes.route('/:id').get(authorize, updateBook)

routes.route('/:id').get(authorize, deleteBook)

export default routes
