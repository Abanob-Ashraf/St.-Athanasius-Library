import { Router } from 'express'
import { admin, authorize } from '../../middlewares/authantication_admin'
import { getManyBlocks, getOneBlock, createBlock, updateBlock } from '../../controllers/blocks'

const routes = Router()

routes.route('/').post(authorize, admin, createBlock)

routes.route('/').get(authorize, getManyBlocks)

routes.route('/:id').get(authorize, getOneBlock)

routes.route('/:id').put(authorize, admin, updateBlock)

export default routes
