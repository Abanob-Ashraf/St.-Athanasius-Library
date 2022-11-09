import { Router } from 'express'
import { authorize } from '../middlewares/authantication'
import { getAllUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/users'

const routes = Router()

routes.get('/users', authorize, getAllUsers)

routes.get('/users/:id', authorize, getUser)

routes.post('/users', createUser)

routes.put('/users/:id', authorize, updateUser)

routes.delete('/users/:id', authorize, deleteUser)

export default routes
