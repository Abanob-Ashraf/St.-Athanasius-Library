import { Router } from 'express'
import { authorize } from '../middlewares/authantication'
import {
  getAllBlocks,
  getBlock,
  createBlock,
  updateBlock,
  deleteBlock
} from '../controllers/blocks'

const routes = Router()

routes.get('/blocks', authorize, getAllBlocks)

routes.get('/blocks/:id', authorize, getBlock)

routes.post('/blocks', authorize, createBlock)

routes.put('/blocks/:id', authorize, updateBlock)

routes.delete('/blocks/:id', authorize, deleteBlock)

export default routes
