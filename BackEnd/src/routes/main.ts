import express from 'express'
import usersRoutes from './api/users'
import blocksRoutes from './api/blocks'
import shelfsRoutes from './api/shelfs'
import booksRoutes from './api/books'
import welcomeRotes from './api/welcome'
import { admin, authorize } from '../middlewares/authantication_admin'
import { fullBackup } from '../middlewares/full_backup'

const routes = express.Router()

routes.use('/', welcomeRotes)

routes.use('/users', usersRoutes)

routes.use('/blocks', blocksRoutes)

routes.use('/shelfs', shelfsRoutes)

routes.use('/books', booksRoutes)

routes.route('/FullBackup').get(authorize, admin, fullBackup)

export default routes
