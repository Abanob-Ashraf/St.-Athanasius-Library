import { Router } from 'express'
import authorize from '../../middlewares/authantication'
import {
  getManyShelfs,
  getOneShelf,
  createShelf,
  updateShelf,
  deleteShelf
} from '../../controllers/shelfs'

const routes = Router()

routes.route('/').post(authorize, createShelf)

routes.route('/').get(authorize, getManyShelfs)

routes.route('/:id').get(authorize, getOneShelf)

routes.route('/:id').put(authorize, updateShelf)

routes.route('/:id').delete(authorize, deleteShelf)

export default routes
