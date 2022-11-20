import { Router } from 'express'
import authorize from '../../middlewares/authantication'
import {
  createUser,
  updateUser,
  deleteUser,
  authenticateUser,
  getManyUsers,
  getOneUser
} from '../../controllers/users'

const routes = Router()

routes.route('/').post(createUser)

routes.route('/authenticate').get(authenticateUser)

routes.route('/').get(authorize, getManyUsers)

routes.route('/:id').get(authorize, getOneUser)

routes.route('/:id').put(authorize, updateUser)

routes.route('/:id').delete(authorize, deleteUser)

export default routes
