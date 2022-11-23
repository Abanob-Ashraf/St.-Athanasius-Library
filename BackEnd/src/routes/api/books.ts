import { Router } from 'express'
import authorize from '../../middlewares/authantication'
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

routes.route('/').get(getAllBooks)

routes.route('/name').get(getBookByName)

routes.route('/:id').get(getBookById)

routes.route('/:id').put(authorize, updateBook)

routes.route('/:id').delete(authorize, deleteBook)

export default routes
