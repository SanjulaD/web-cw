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

export { createSupplierProduct }