import { Router } from 'express'
import { admin, authorize } from '../../middlewares/authantication_admin'
import {
  getManyShelfs,
  getOneShelf,
  createShelf,
  updateShelf,
  // deleteShelf,
  getShelfsWithBlockId,
  getAllShelfsForBackup
} from '../../controllers/shelfs'

const routes = Router()

routes.route('/').post(authorize, admin, createShelf)

routes.route('/').get(authorize, getManyShelfs)

routes.route('/ShelfsBackup').get(authorize, admin, getAllShelfsForBackup)

routes.route('/block/:id').get(getShelfsWithBlockId)

routes.route('/:id').get(authorize, getOneShelf)

routes.route('/:id').put(authorize, admin, updateShelf)

// routes.route('/:id').delete(authorize, admin, deleteShelf)

export default routes
