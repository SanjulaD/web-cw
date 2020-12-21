import express from 'express'
import asyncHandler from 'express-async-handler'

import ConsumerProducts from './../models/consumerProductModel.js';

// @desc    Fetch all products
// @rout    GET /consumer
// @access  public
const getConsumerProducts = asyncHandler(async (req, res) => {
    const consumerProducts = await ConsumerProducts.find({})
    res.json(consumerProducts);
})

// @desc    Fetch Consumer Product by id
// @rout    GET /consumer/:id
// @access  public
const getConsumerProductById = asyncHandler(async (req, res) => {
    const consumerProduct = await ConsumerProducts.findById(req.params.id);

    if(consumerProduct) {
        res.json(consumerProduct);
    } else {
        res.status(404)
        throw new Error('Consumer Product not Found')
    }
})

export {
    getConsumerProducts,
    getConsumerProductById
}