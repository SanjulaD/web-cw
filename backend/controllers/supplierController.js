import express from 'express'
import asyncHandler from 'express-async-handler'
import generateToken from './../utils/genarateToken.js'
import Supplier from './../models/supplierModel.js';

// @desc    Create supplier product
// @rout    POST /api/supplier/
// @access  private
const createSupplierProduct = asyncHandler(async (req, res) => {
    const {
        name,
        email,
        address,
        longitude,
        latitude,
        image,
        description,
        cropSelection
    } = req.body

    if (name & address === '') {
        res.status(400)
        throw new Error('No Products Items')
    } else {
        const supplier = await Supplier.create({
            user: req.user._id,
            name,
            email,
            address,
            longitude,
            latitude,
            image,
            description,
            cropSelection
        })
        const createdSupplierProduct = await supplier.save()

        res.status(201).json(createdSupplierProduct)
    }
})

// @desc    Get logged in user products
// @route   GET /api/supplier/myproducts
// @access  Private
const getMyProducts = asyncHandler(async (req, res) => {
    const products = await Supplier.find({ user: req.user._id })
    res.json(products)
})

// @desc    Get all orders
// @route   GET /api/supplier
// @access  Private/Admin
const getProducts = asyncHandler(async (req, res) => {
    const products = await Supplier.find({}).populate('user', 'id name')
    res.json(products)
})


export { createSupplierProduct, getMyProducts,getProducts }