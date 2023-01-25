import { Router } from 'express'
import { admin, authorize } from '../../middlewares/authantication_admin'
import {
  createBook,
  // deleteBook,
  getManyBooks,
  getOneBook,
  searchForBook,
  updateBook,
  getUserBooks,
  getLatestBooks,
  countBooksInBlockOrShelfAndBlock,
  searchForBookWithBlockOrShelfAndBlock,
  getAllBooksForBackup
} from '../../controllers/books'

const routes = Router()

routes.route('/').post(authorize, createBook)

routes.route('/user/mybooks').get(authorize, getUserBooks)

routes.route('/').get(getManyBooks)

routes.route('/search').get(searchForBook)

routes.route('/latestBooks').get(getLatestBooks)

routes.route('/getBooksInThisBlock').get(searchForBookWithBlockOrShelfAndBlock)

routes.route('/countBooksInThisBlock').get(authorize, countBooksInBlockOrShelfAndBlock)

routes.route('/backup').get(authorize, admin, getAllBooksForBackup)

routes.route('/:id').get(getOneBook)

routes.route('/:id').put(authorize, updateBook)

// routes.route('/:id').delete(authorize, admin, deleteBook)

export default routes
