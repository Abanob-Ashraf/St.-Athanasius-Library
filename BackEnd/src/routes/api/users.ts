import { Router } from 'express'
import authorize from '../../middlewares/authantication'
import {
  createUser,
  updateUser,
  deleteUser,
  authenticateUser,
  getManyUsers,
  getOneUser,
  getAllDeletedUsers
} from '../../controllers/users'

const routes = Router()

routes.route('/signup').post(createUser)

routes.route('/login').get(authenticateUser)

routes.route('/deleted').get(authorize, getAllDeletedUsers)

routes.route('/').get(authorize, getManyUsers)

routes.route('/:id').get(authorize, getOneUser)

routes.route('/:id').put(authorize, updateUser)

routes.route('/:id').delete(authorize, deleteUser)

export default routes
