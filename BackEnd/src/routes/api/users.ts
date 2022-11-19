import { Router } from 'express'
import { authorize } from '../../middlewares/authantication'
import { getMany, getOne, createUser, updateUser, deleteUser } from '../../controllers/users'

const routes = Router()

routes.route('/').post(createUser)

routes.route('/').get(authorize, getMany)

routes.route('/:id').get(authorize, getOne)

routes.route('/:id').get(authorize, updateUser)

routes.route('/:id').get(authorize, deleteUser)

export default routes
