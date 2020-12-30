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

    if (productSeed) {
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

    if (productSeed) {
        productSeed.remove()
        res.json({ message: "Product removed" });
    } else {
        res.status(404)
        throw new Error('Seed not Found')
    }
})

// @desc    Create Product Seed
// @rout    POST /seeds/
// @access  private/ Admin
const createSeedProduct = asyncHandler(async (req, res) => {
    const productSeed = new ProductSeeds({
        name: 'Sample Seed',
        user: req.user._id,
        image: '/images/sample.png',
        description: 'Sample Description',
        category: 'Sample Category',
        price: 0,
        countInStock: 0,
        numReviews: 0
    })

    const createdProduct = await productSeed.save()
    res.status(201).json(createdProduct)
})

// @desc    Update Product Seed
// @rout    PUT /seeds/:id
// @access  private/ Admin
const updateSeedProduct = asyncHandler(async (req, res) => {
    const { name, price, image, description, category, countInStock } = req.body

    const updateProductSeed = await ProductSeeds.findById(req.params.id)

    if (updateProductSeed) {

        updateProductSeed.name = name
        updateProductSeed.price = price
        updateProductSeed.image = image
        updateProductSeed.description = description
        updateProductSeed.category = category
        updateProductSeed.countInStock = countInStock

        const updatedProduct = await updateProductSeed.save()
        res.status(201).json(updatedProduct)
    } else {
        res.status(401)
        throw new Error('Product not found')
    }
})

// @desc    Update Product Review
// @rout    POST /seeds/:id/review
// @access  private/ Admin
const createSeedProductReview = asyncHandler(async (req, res) => {
    const { rating, comment } = req.body

    const productSeed = await ProductSeeds.findById(req.params.id)

    if (productSeed) {
        const alreadyReviewed = productSeed.reviews.find(r => r.user.toString() === req.user._id.toString())
        if (alreadyReviewed) {
            res.status(400)
            throw new Error('Product already reviewed')
        }

        const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id
        }

        productSeed.reviews.push(review)

        productSeed.numReviews = productSeed.reviews.length

        productSeed.rating = productSeed.reviews.reduce((acc, item) => item.rating + acc, 0) / productSeed.reviews.length

        await productSeed.save()
        
        res.status(201).json({ message: 'Review added' })

    } else {
        res.status(401)
        throw new Error('Product not found')
    }
})

export {
    getSeedProducts,
    getSeedProductById,
    deleteSeedProduct,
    createSeedProduct,
    updateSeedProduct,
    createSeedProductReview
}