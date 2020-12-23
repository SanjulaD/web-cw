import express from 'express'
import asyncHandler from 'express-async-handler'

import orderSeed from './../models/orderSeedModel.js';

// @desc    create new order
// @rout    POST /api/orders
// @access  private
const addOrderItems = asyncHandler(async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body

    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No Order Items')
    } else {
        const order = new orderSeed({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        })

        const createdOrder = await order.save()

        res.status(201).json(createdOrder)
    }
})

// @desc    Get order by ID
// @rout    GET /api/orders/:id
// @access  private
const getOrderById = asyncHandler(async (req, res) => {
    const order = await orderSeed.findById(req.params.id).populate('user', 'name email')

    if (order) {
        res.json(order);
    } else {
        res.status(404)
        throw new Error('Order not Found')
    }
})

export { addOrderItems, getOrderById }