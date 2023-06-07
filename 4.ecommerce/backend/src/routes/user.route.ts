import { Router } from 'express'
import * as UserController from '../controllers/user.controller'
import {
    authenticateToken,
    isAdmin,
} from '../middlewares/authentication.middleware'
import { validate } from '../utils/validate'
import {
    createUserSchema,
    updateUserSchema,
} from '../validators/user.validator'
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /users:
 *   get:
 *     summary: Lists all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
const router = Router()
router.get('/', authenticateToken, isAdmin, UserController.getUsers)

router.get('/:id', authenticateToken, isAdmin, UserController.getUserById)

router.post(
    '/',
    validate(createUserSchema),
    authenticateToken,
    isAdmin,
    UserController.createUser
)

router.put(
    '/:id',
    validate(updateUserSchema),
    authenticateToken,
    isAdmin,
    UserController.updateUserById
)

router.delete('/:id', authenticateToken, isAdmin, UserController.deleteUser)
export default router
