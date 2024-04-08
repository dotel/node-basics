/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { Router } from 'express'

import * as postController from '../controllers/todo.controller'
import { validate } from '../utils/validate'
import { createPostDto } from '../validators/create-post.validator'
import { authenticateToken } from '../middlewares/authentication.middleware'

const router = Router()

router.get('/', authenticateToken, postController.findAll)
router.post(`/`, validate(createPostDto), authenticateToken, postController.create)

router.delete(`/:id`, authenticateToken, postController.deleteById)

router.get(`/:id`, authenticateToken,  postController.findByID)

export default router
