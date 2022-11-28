import { Router } from 'express'
import { authorize, admin } from '../../middlewares/authantication_admin'
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

routes.route('/deleted').get(authorize, admin, getAllDeletedUsers)

routes.route('/').get(authorize, admin, getManyUsers)

routes.route('/:id').get(authorize, admin, getOneUser)

routes.route('/:id').put(authorize, admin, updateUser)

routes.route('/:id').delete(authorize, admin, deleteUser)

export default routes
