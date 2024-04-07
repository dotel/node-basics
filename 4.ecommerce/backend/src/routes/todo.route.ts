import { Router } from 'express'
import { validate } from '../utils/validate'
import { signupSchema, loginSchema } from '../validators/auth.validator'
import * as AuthController from '../controllers/auth.controller'

const router = Router()

router.get('/', (req, res, next) => {
  res.send([{id: 2, text: 'lol'}]) })

export default router
