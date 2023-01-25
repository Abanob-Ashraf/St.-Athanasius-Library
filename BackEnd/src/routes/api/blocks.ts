import { Router } from 'express'
import { admin, authorize } from '../../middlewares/authantication_admin'
import {
  getManyBlocks,
  getOneBlock,
  createBlock,
  updateBlock,
  getAllBlocksForBackup
  //   deleteBlock
} from '../../controllers/blocks'

const routes = Router()

routes.route('/').post(authorize, admin, createBlock)

routes.route('/').get(getManyBlocks)

routes.route('/backup').get(authorize, admin, getAllBlocksForBackup)

routes.route('/:id').get(authorize, getOneBlock)

routes.route('/:id').put(authorize, admin, updateBlock)

// routes.route('/:id').delete(authorize, admin, deleteBlock)

export default routes
