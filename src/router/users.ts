import { Router } from 'express'
// import { authorize } from '../middlewares/authantication'
import { getAllUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/users'

const routes = Router()

routes.get('/users', getAllUsers)

routes.get('/users/:id', getUser)

routes.post('/users', createUser)

routes.put('/users/:id', updateUser)

routes.delete('/users/:id', deleteUser)

export default routes
