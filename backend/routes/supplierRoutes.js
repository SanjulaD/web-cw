import express from 'express'
import { protect, admin } from './../middleware/authMiddleware.js'
import {
    createSupplierProduct,
    getMyProducts,
    getProducts,
    getFarmerProductById,
    createFarmerProductReview,
    updateProductReviewed,
    getMyProductsForPublic,
    updateSupplierProductProfile
} from './../controllers/supplierController.js'
const router = express.Router()

router
    .route('/')
    .post(protect, createSupplierProduct)
    .get(protect, admin, getProducts)

router
    .route('/all')
    .get(getMyProductsForPublic)

router
    .route('/myproducts')
    .get(protect, getMyProducts)

router
    .route('/product/:id')
    .get(protect, getFarmerProductById)

    
router
    .route('/product/:id/edit')
    .put(protect, updateSupplierProductProfile)

router
    .route('/product/:id/reviews')
    .post(protect, admin, createFarmerProductReview)
    .put(protect, admin, updateProductReviewed)

export default router
