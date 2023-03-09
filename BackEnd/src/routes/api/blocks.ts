import { Router } from 'express'
import { admin, authorize } from '../../middlewares/authantication_admin'
import {
  getManyBlocks,
  getOneBlock,
  createBlock,
  updateBlock,
  getAllBlocksForBackup,
  getBlocksWithLibraryId
  //   deleteBlock
} from '../../controllers/blocks'

const routes = Router()

routes.route('/').post(authorize, admin, createBlock)

routes.route('/').get(getManyBlocks)

routes.route('/BlocksBackup').get(authorize, admin, getAllBlocksForBackup)

routes.route('/librarys/:id').get(getBlocksWithLibraryId)

routes.route('/:id').get(authorize, getOneBlock)

routes.route('/:id').put(authorize, admin, updateBlock)

// routes.route('/:id').delete(authorize, admin, deleteBlock)

export default routes
