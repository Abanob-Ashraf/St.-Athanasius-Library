import { getAllBooksForBackup } from './../../controllers/books'
import { getAllShelfsForBackup } from './../../controllers/shelfs'
import { getAllBlocksForBackup } from './../../controllers/blocks'
import { admin, authorize } from './../../middlewares/authantication_admin'
import { Router, Request, Response } from 'express'
import { getAllUsersForBackup } from '../../controllers/users'

const routes = Router()

const welcome = async (_req: Request, res: Response) => {
  try {
    return res.status(200).json('welcome To our library 🌍')
  } catch (error) {
    res.status(401).json(error)
  }
}

routes.route('/').get(welcome)

routes
  .route('/backup')
  .get(
    authorize,
    admin,
    getAllUsersForBackup,
    getAllBlocksForBackup,
    getAllShelfsForBackup,
    getAllBooksForBackup
  )

export default routes
