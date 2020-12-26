import express from 'express'
const router = express.Router()

import { getSeedProducts, getSeedProductById, deleteSeedProduct } from './../controllers/productSeedController.js'
import { getLendMachnines, getLendMachnineById, deleteLendMachnine } from './../controllers/productLendMachineController.js'
import { getConsumerProducts, getConsumerProductById, deleteConsumerProduct } from './../controllers/consumerProductControlller.js'
import { protect, admin } from './../middleware/authMiddleware.js'

router.route('/seeds').get(getSeedProducts)
router
    .route('/seeds/:id')
    .get(getSeedProductById)
    .delete(protect, admin, deleteSeedProduct)

router.route('/lendMachines').get(getLendMachnines)
router
    .route('/lendMachines/:id')
    .get(getLendMachnineById)
    .delete(protect, admin, deleteLendMachnine)

router.route('/consumer').get(getConsumerProducts)
router
    .route('/consumer/:id')
    .get(getConsumerProductById)
    .delete(protect, admin,deleteConsumerProduct)

export default router
