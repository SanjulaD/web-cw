import express from 'express'
import { protect, admin } from './../middleware/authMiddleware.js'
import { createSupplierProduct, getMyProducts, getProducts } from './../controllers/supplierController.js'
const router = express.Router()

router.route('/').post(protect, createSupplierProduct).get(protect, admin, getProducts)
router.route('/myproducts').get(protect, getMyProducts)

export default router
