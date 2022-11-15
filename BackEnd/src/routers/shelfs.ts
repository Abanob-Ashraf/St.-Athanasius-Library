import { Router } from 'express'
import { authorize } from '../middlewares/authantication'
import {
  getAllShelfs,
  getShelf,
  createShelf,
  updateShelf,
  deleteShelf
} from '../controllers/shelfs'

const routes = Router()

routes.get('/shelfs', authorize, getAllShelfs)

routes.get('/shelfs/:id', authorize, getShelf)

routes.post('/shelfs', authorize, createShelf)

routes.put('/shelfs/:id', authorize, updateShelf)

routes.delete('/shelfs/:id', authorize, deleteShelf)

export default routes
