import { Router } from 'express'
// import session from 'express-session'
import { authorize, admin } from '../../middlewares/authantication_admin'
import {
  createUser,
  updateUser,
  deleteUser,
  authenticateUser,
  getManyUsers,
  getOneUser,
  getAllUnAvilableUsers,
  getMine,
  searchForUser
} from '../../controllers/users'
import { body } from 'express-validator'

const routes = Router()

routes.route('/signup').post(
  // email must be an email
  body('email').isEmail(),
  // password must be at least 8 chars long
  body('password').isLength({ min: 8 }),

  createUser
)

routes.route('/login').post(
  // email must be an email
  body('email').isEmail(),
  // password must be at least 8 chars long
  body('password').isLength({ min: 8 }),

  authenticateUser
)

routes.route('/me').get(authorize, getMine)

routes.route('/unavilable').get(authorize, admin, getAllUnAvilableUsers)

routes.route('/').get(authorize, admin, getManyUsers)

routes.route('/search').post(authorize, admin, searchForUser)

routes.route('/:id').get(authorize, admin, getOneUser)

routes.route('/:id').put(
  authorize,

  // email must be an email
  body('email').isEmail(),
  // password must be at least 8 chars long
  body('password').isLength({ min: 8 }),
  // phone_number must be equal 11 number and accept null
  body('phone_number').isLength({ min: 11, max: 11 }).optional({ nullable: true }),

  updateUser
)

routes.route('/:id').delete(authorize, admin, deleteUser)

// routes.route('/logout').get(async (request, response) => {
//   if (request.session.userId) {
//     delete request.session.userId
//     response.json({ result: 'SUCCESS' })
//   } else {
//     response.json({ result: 'ERROR', message: 'User is not logged in.' })
//   }
// })

export default routes
