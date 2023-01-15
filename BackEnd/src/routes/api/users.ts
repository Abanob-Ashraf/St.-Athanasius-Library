import { Router } from 'express'
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
  searchForUser,
  changePassword,
  getUserDataToResetPassword,
  postNewPassword
} from '../../controllers/users'
import { body } from 'express-validator'

const routes = Router()

routes.route('/createNewUser').post(
  authorize,
  admin,
  // email must be an email
  body('email').isEmail(),
  // password must be at least 8 chars long
  body('password').isLength({ min: 8 }),
  // phone_number must be equal 11 number and accept null
  body('phone_number').isLength({ min: 11, max: 11 }).optional({ nullable: true }),

  createUser
)

routes.route('/login').post(
  // email must be an email
  body('email').isEmail(),
  // password must be at least 8 chars long
  body('password').isLength({ min: 8 }),

  authenticateUser
)

routes.route('/resetPassword').post(
  // email must be an email
  body('email').isEmail(),
  // password must be at least 8 chars long

  getUserDataToResetPassword
)

routes.route('/NewPassword').post(
  // password must be at least 8 chars long
  body('new_password').isLength({ min: 8 }),

  postNewPassword
)

routes.route('/me').get(authorize, getMine)

routes.route('/me/changePassword').put(
  authorize,
  // password must be at least 8 chars long
  body('old_password').isLength({ min: 8 }),
  body('new_password').isLength({ min: 8 }),

  changePassword
)

routes.route('/unavilable').get(authorize, admin, getAllUnAvilableUsers)

routes.route('/').get(authorize, admin, getManyUsers)

routes.route('/search').get(
  authorize,
  admin,

  // email must be an email
  body('email').isEmail().optional({ nullable: true }),

  searchForUser
)

routes.route('/:id').get(authorize, admin, getOneUser)

routes.route('/:id').put(
  authorize,

  // email must be an email
  body('email').isEmail(),
  // phone_number must be equal 11 number and accept null
  body('phone_number').isLength({ min: 11, max: 11 }).optional({ nullable: true }),

  updateUser
)

routes.route('/:id').delete(authorize, admin, deleteUser)

export default routes
