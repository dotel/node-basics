import { Router } from 'express'
import * as ProfileController from '../controllers/profile.controller'
import {
    authenticateToken,
} from '../middlewares/authentication.middleware'
import { validate } from '../utils/validate'
import { updateProfileSchema } from '../validators/profile.validator'

const router = Router()
router.get('/', authenticateToken, ProfileController.getProfile)

router.put(
    '/',
    authenticateToken,
    validate(updateProfileSchema),
    ProfileController.updateProfile
)
export default router
