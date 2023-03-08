import { Router } from 'express'
import { admin, authorize } from '../../middlewares/authantication_admin'
import {
  getManyLibrarys,
  getOneLibrary,
  createLibrary,
  updateLibrary,
  getAllLibrarysForBackup
  //   deleteLibrary
} from '../../controllers/librarys'

const routes = Router()

routes.route('/').post(authorize, admin, createLibrary)

routes.route('/').get(getManyLibrarys)

routes.route('/LibrarysBackup').get(authorize, admin, getAllLibrarysForBackup)

routes.route('/:id').get(authorize, getOneLibrary)

routes.route('/:id').put(authorize, admin, updateLibrary)

// routes.route('/:id').delete(authorize, admin, deleteLibrary)

export default routes
