import express from 'express'
const router = express.Router()

import { getSeedProducts, getSeedProductById } from './../controllers/productSeedController.js'
import { getLendMachnines, getLendMachnineById } from './../controllers/productLendMachineController.js'
import { getConsumerProducts } from './../controllers/consumerProductControlller.js'

router.route('/seeds').get(getSeedProducts)
router.route('/seeds/:id').get(getSeedProductById)

router.route('/lendMachines').get(getLendMachnines)
router.route('/lendMachines/:id').get(getLendMachnineById)

router.route('/consumer').get(getConsumerProducts)

export default router
