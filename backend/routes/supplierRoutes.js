import express from 'express'
import { protect } from './../middleware/authMiddleware.js'
import { createSupplierProduct } from './../controllers/supplierController.js'

const router = express.Router()

router.route('/').post(protect, createSupplierProduct)

export default router
