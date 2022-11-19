import { Router } from 'express'
import { authorize } from '../../middlewares/authantication'
import {
  getAllBlocks,
  getBlock,
  createBlock,
  updateBlock,
  deleteBlock
} from '../../controllers/blocks'

const routes = Router()

routes.route('/').post(authorize, createBlock)

routes.get('/', authorize, getAllBlocks)

routes.route('/:id').get(authorize, getBlock)

routes.route('/:id').get(authorize, updateBlock)

routes.route('/:id').get(authorize, deleteBlock)

export default routes
