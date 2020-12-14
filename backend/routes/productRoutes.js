import express from 'express'
import asyncHandler from 'express-async-handler'

import ProductSeeds from './../models/productSeedModel.js';
import ProductLendMachines from './../models/productLendMachineModel.js';

const router = express.Router()

// @desc    Fetch all products
// @rout    GET /seeds
// @access  public
router.get('/seeds', asyncHandler(async (req, res) => {
    const productSeed = await ProductSeeds.find({})

    res.json(productSeed);
}))

// @desc    Fetch all lending Machines
// @rout    GET /lendMachines
// @access  public
router.get('/lendMachines', asyncHandler(async (req, res) => {
    const productLendMachine = await ProductLendMachines.find({})
    res.json(productLendMachine);
}))

// @desc    Fetch product by id
// @rout    GET /seeds/:id
// @access  public
router.get('/seeds/:id', asyncHandler(async (req, res) => {
    const productSeed = await ProductSeeds.findById(req.params.id);

    if(productSeed) {
        res.json(productSeed);
    } else {
        res.status(404).json({ message: 'Product not found' })
    }
}))

// @desc    Fetch machine by id
// @rout    GET /lendMachines/:id
// @access  public
router.get('/lendMachines/:id', asyncHandler(async (req, res) => {
    const productLendMachine = await ProductLendMachines.findById(req.params.id);

    if(productLendMachine) {
        res.json(productLendMachine);
    } else {
        res.status(404).json({ message: 'Machine not found' })
    }
}))


export default router
