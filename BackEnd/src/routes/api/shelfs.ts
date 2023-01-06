import { Router } from 'express'
import { admin, authorize } from '../../middlewares/authantication_admin'
import {
  getManyShelfs,
  getOneShelf,
  createShelf,
  updateShelf,
  getShelfsWithBlockId
} from '../../controllers/shelfs'

const routes = Router()

routes.route('/').post(authorize, admin, createShelf)

routes.route('/').get(authorize, getManyShelfs)

routes.route('/block/:id').get(authorize, getShelfsWithBlockId)

routes.route('/:id').get(authorize, getOneShelf)

routes.route('/:id').put(authorize, admin, updateShelf)

export default routes
