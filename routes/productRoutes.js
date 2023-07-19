import express from 'express'
import { createProduct, deletedProduct, getProducts, updateProduct } from '../controllers/producContorollers.js'

const router=express.Router()
router.route('/').post(createProduct).get(getProducts)
router.route('/:id').put(updateProduct).delete(deletedProduct)

export default router