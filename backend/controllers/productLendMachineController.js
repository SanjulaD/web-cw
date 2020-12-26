import express from 'express'
import asyncHandler from 'express-async-handler'

import ProductLendMachines from './../models/productLendMachineModel.js';

// @desc    Fetch all lending Machines
// @rout    GET /lendMachines
// @access  public
const getLendMachnines = asyncHandler(async(req, res) => {
    const productLendMachine = await ProductLendMachines.find({})
    res.json(productLendMachine);
})

// @desc    Fetch machine by id
// @rout    GET /lendMachines/:id
// @access  public
const getLendMachnineById = asyncHandler(async(req, res) => {
    const productLendMachine = await ProductLendMachines.findById(req.params.id);

    if(productLendMachine) {
        res.json(productLendMachine);
    } else {
        res.status(404)
        throw new Error('Machine not Found')
    }
})

// @desc    Fetch machine by id
// @rout    GET /lendMachines/:id
// @access  private/admin
const deleteLendMachnine = asyncHandler(async(req, res) => {
    const lendMachine = await ProductLendMachines.findById(req.params.id);

    if(lendMachine) {
        lendMachine.remove()
        res.json({ message: 'Machine Removed' });
    } else {
        res.status(404)
        throw new Error('Machine not Found')
    }
})

export { getLendMachnines, getLendMachnineById, deleteLendMachnine }