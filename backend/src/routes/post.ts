import { Router } from 'express'
import { createPostHandler, deleteHandler, editHandler } from '../controllers/postController'

const router = Router()

router.post('/create-post', createPostHandler)
router.post('/delete', deleteHandler)
router.get('/edit', editHandler)

export default router
