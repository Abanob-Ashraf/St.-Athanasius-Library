import { Router } from 'express'
import { authorize } from '../../middlewares/authantication_admin'
import {
  createBook,
  getManyBooks,
  getBookById,
  searchForBook,
  updateBook,
  getUserBooks,
  getLatestBooks
} from '../../controllers/books'

const routes = Router()

routes.route('/').post(authorize, createBook)

routes.route('/user/mybooks').get(authorize, getUserBooks)

routes.route('/').get(getManyBooks)

routes.route('/search').get(searchForBook)

routes.route('/latestBooks').get(getLatestBooks)

routes.route('/:id').get(getBookById)

routes.route('/:id').put(authorize, updateBook)

export default routes
