import { Router } from 'express'
import { admin, authorize } from '../../middlewares/authantication_admin'
import {
  createBook,
  deleteBook,
  getManyBooks,
  getBookById,
  getBookByName,
  updateBook,
  getUserBooks
} from '../../controllers/books'

const routes = Router()

routes.route('/').post(authorize, createBook)

routes.route('/user/mybooks').get(authorize, getUserBooks)

routes.route('/').get(getManyBooks)

routes.route('/name').get(getBookByName)

routes.route('/:id').get(getBookById)

routes.route('/:id').put(authorize, updateBook)

routes.route('/:id').delete(authorize, admin, deleteBook)

export default routes
