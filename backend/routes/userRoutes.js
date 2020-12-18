import express from 'express'
const router = express.Router()

import { authUser, getUserProfile, registerUser } from '../controllers/userController.js'
import { protect } from './../middleware/authMiddleware.js'

router.post('/', registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)

export default router