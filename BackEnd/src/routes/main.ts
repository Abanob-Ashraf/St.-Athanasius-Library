import express from 'express'
import usersRoutes from './api/users'
import blocksRoutes from './api/blocks'
import shelfsRoutes from './api/shelfs'
import booksRoutes from './api/books'
import welcomeRotes from './api/welcome'

const routes = express.Router()

routes.use('/', welcomeRotes)

routes.use('/users', usersRoutes)

routes.use('/blocks', blocksRoutes)

routes.use('/shelfs', shelfsRoutes)

routes.use('/books', booksRoutes)

export default routes
