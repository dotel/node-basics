/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { Router } from 'express'
import { validate } from '../utils/validate'
import { createUserDto } from '../validators/create-user.validator'
import * as UserController from '../controllers/user.controller'
const router = Router()

router.get('/', UserController.find)

router.post('/login', UserController.login)

router.post(`/signup`, validate(createUserDto), UserController.signup)

export default router
