import express from 'express'
import { createProduct, deletedProduct, updateProduct } from '../controllers/producContorollers.js'

const router=express.Router()
router.route('/').post(createProduct)
router.route('/:id').put(updateProduct).delete(deletedProduct)

export default router