import { Router } from 'express'
import { authorize } from '../../middlewares/authantication_admin'
import {
  getManyBlocks,
  getOneBlock,
  createBlock,
  updateBlock,
  deleteBlock
} from '../../controllers/blocks'

const routes = Router()

routes.route('/').post(authorize, createBlock)

routes.route('/').get(authorize, getManyBlocks)

routes.route('/:id').get(authorize, getOneBlock)

routes.route('/:id').put(authorize, updateBlock)

routes.route('/:id').delete(authorize, deleteBlock)

export default routes
