import express from 'express'
import { register,login, forgotPassword } from '../controllers/AuthController.js'

const router = express.Router()

router.post('/register',register)
router.post('/login',login)
router.post('/forgotPassword',forgotPassword)

export default router;