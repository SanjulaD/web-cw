import express from 'express'
import asyncHandler from 'express-async-handler'

import ProductSeeds from './../models/productSeedModel.js';

// @desc    Fetch all products
// @rout    GET /seeds
// @access  public
const getSeedProducts = asyncHandler(async (req, res) => {
    const productSeed = await ProductSeeds.find({})
    res.json(productSeed);
})

// @desc    Fetch product by id
// @rout    GET /seeds/:id
// @access  public
const getSeedProductById = asyncHandler(async (req, res) => {
    const productSeed = await ProductSeeds.findById(req.params.id);

    if(productSeed) {
        res.json(productSeed);
    } else {
        res.status(404)
        throw new Error('Seed not Found')
    }
})

// @desc    Delete Seed
// @rout    DELETE /seeds/:id
// @access  private/ Admin
const deleteSeedProduct = asyncHandler(async (req, res) => {
    const productSeed = await ProductSeeds.findById(req.params.id);

    if(productSeed) {
        productSeed.remove()
        res.json({ message: "Product removed" });
    } else {
        res.status(404)
        throw new Error('Seed not Found')
    }
})

export { getSeedProducts, getSeedProductById, deleteSeedProduct }