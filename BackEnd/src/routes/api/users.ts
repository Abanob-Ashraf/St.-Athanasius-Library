import { Router } from 'express'
import { authorize, admin } from '../../middlewares/authantication_admin'
import {
  createUser,
  updateUser,
  deleteUser,
  authenticateUser,
  getManyUsers,
  getOneUser,
  getAllUnAvilableUsers,
  getMine
} from '../../controllers/users'

const routes = Router()

routes.route('/signup').post(createUser)

routes.route('/login').get(authenticateUser)

routes.route('/me').get(authorize, getMine)

routes.route('/unavilable').get(authorize, admin, getAllUnAvilableUsers)

routes.route('/').get(authorize, admin, getManyUsers)

routes.route('/:id').get(authorize, admin, getOneUser)

routes.route('/:id').put(authorize, updateUser)

routes.route('/:id').delete(authorize, admin, deleteUser)

export default routes
