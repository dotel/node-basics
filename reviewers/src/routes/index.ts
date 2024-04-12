//* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import userRoutes from './user.route'
import todoRouter from './restaurants.route'
import { Router } from 'express'

const router = Router()

router.use('/users', userRoutes)
router.use('/restros', todoRouter)


export default router
