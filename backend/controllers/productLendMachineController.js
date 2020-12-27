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

// @desc    Create Lend Machine
// @rout    POST /lendMachines/
// @access  private/ Admin
const createLendMachine = asyncHandler(async (req, res) => {
    const lendMachine = new ProductLendMachines({
        name: 'sample machine',
        user: req.user._id,
        image: '/images/farmMachine.jpg',
        description: 'sample description',
        target_plant: 'sample category',
        price: 0,
        quantity: 0,
        machine_power: '0HP',
    })

    const createdLendMachine = await lendMachine.save()
    res.status(201).json(createdLendMachine)
})

// @desc    Update Lend Machine
// @rout    PUT /lendMachines/:id
// @access  private/ Admin
const updateLendMachine = asyncHandler(async (req, res) => {
    const { name, price, image, description, target_plant, quantity, machine_power } = req.body

    const updateLendMachine = await ProductLendMachines.findById(req.params.id)

    if (updateLendMachine) {

        updateLendMachine.name = name
        updateLendMachine.price = price
        updateLendMachine.image = image
        updateLendMachine.description = description
        updateLendMachine.target_plant = target_plant
        updateLendMachine.quantity = quantity
        updateLendMachine.machine_power = machine_power

        const updatedMachine = await updateLendMachine.save()
        res.status(201).json(updatedMachine)
    } else {
        res.status(401)
        throw new Error('Product not found')
    }
})

export { 
    getLendMachnines, 
    getLendMachnineById, 
    deleteLendMachnine,
    createLendMachine,
    updateLendMachine
}