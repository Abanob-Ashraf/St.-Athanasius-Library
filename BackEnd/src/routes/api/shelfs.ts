import { Router } from 'express'
import { authorize } from '../../middlewares/authantication'
import {
  getAllShelfs,
  getShelf,
  createShelf,
  updateShelf,
  deleteShelf
} from '../../controllers/shelfs'

const routes = Router()

routes.route('/').post(authorize, createShelf)

routes.route('/').get(authorize, getAllShelfs)

routes.route('/:id').get(authorize, getShelf)

routes.route('/:id').get(authorize, updateShelf)

routes.route('/:id').get(authorize, deleteShelf)

export default routes