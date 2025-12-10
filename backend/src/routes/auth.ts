import { Router } from 'express'
import { loginHandler, registerHandler, meHandler } from '../controllers/authController'
import { requireAuth } from '../middleware/authMiddleware'

const router = Router()

router.post('/register', registerHandler)
router.post('/login', loginHandler)
router.get('/me', requireAuth, meHandler)

export default router
