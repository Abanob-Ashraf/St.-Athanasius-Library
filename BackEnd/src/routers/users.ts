import { Router } from 'express'
import { authorize } from '../middlewares/authantication'
import { getMany, getOne, createUser, updateUser, deleteUser } from '../controllers/users'

const routes = Router()

routes.post('/users', createUser)

routes.get('/users', authorize, getMany)

routes.get('/users/:id', authorize, getOne)

routes.put('/users/:id', authorize, updateUser)

routes.delete('/users/:id', authorize, deleteUser)

export default routes
