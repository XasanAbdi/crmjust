import express from 'express'
import { getUserprofile, login, register } from '../controllers/userContoroller.js'

const router=express.Router()

router.route('/').post(register)
router.route('/profile').post(getUserprofile)
router.route('/login').post(login)

export default router