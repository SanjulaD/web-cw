import express from 'express'
const router = express.Router()

import {
    getSeedProducts,
    getSeedProductById,
    deleteSeedProduct,
    createSeedProduct,
    updateSeedProduct,
    createSeedProductReview
} from './../controllers/productSeedController.js'
import {
    getLendMachnines,
    getLendMachnineById,
    deleteLendMachnine,
    updateLendMachine,
    createLendMachine
} from './../controllers/productLendMachineController.js'
import {
    getConsumerProducts,
    getConsumerProductById,
    deleteConsumerProduct,
    createConsumer,
    updateConsumer
} from './../controllers/consumerProductControlller.js'
import { protect, admin } from './../middleware/authMiddleware.js'

router
    .route('/seeds')
    .get(getSeedProducts)
    .post(protect, admin, createSeedProduct)

router
    .route('/seeds/:id/reviews')
    .post(protect, createSeedProductReview)

router
    .route('/seeds/:id')
    .get(getSeedProductById)
    .delete(protect, admin, deleteSeedProduct)
    .put(protect, admin, updateSeedProduct)

router
    .route('/lendMachines')
    .get(getLendMachnines)
    .post(protect, admin, createLendMachine)

router
    .route('/lendMachines/:id')
    .get(getLendMachnineById)
    .delete(protect, admin, deleteLendMachnine)
    .put(protect, admin, updateLendMachine)

router
    .route('/consumer')
    .get(getConsumerProducts)
    .post(protect, admin, createConsumer)

router
    .route('/consumer/:id')
    .get(getConsumerProductById)
    .delete(protect, admin, deleteConsumerProduct)
    .put(protect, admin, updateConsumer)

export default router
