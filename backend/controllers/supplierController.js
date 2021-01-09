import express from 'express'
import asyncHandler from 'express-async-handler'
import generateToken from './../utils/genarateToken.js'
import Supplier from './../models/supplierModel.js';
import nodeGeocoder from 'node-geocoder'

// @desc    Create supplier product
// @rout    POST /api/supplier/
// @access  private
const createSupplierProduct = asyncHandler(async (req, res) => {

    const {
        name,
        email,
        address,
        cropSelection,
        storage,
        image,
        phonenumber,
        description
    } = req.body

    if (name & address === '') {
        res.status(400)
        throw new Error('No Products Items')
    } else {
        let options = {
            provider: 'openstreetmap'
        };

        let geoCoder = nodeGeocoder(options);

        const getCordinates = geoCoder.geocode(address).then(
            response => {
                return response[0]
            }).catch((err) => {
                console.log(err);
            });

        const getLatLong = async () => {
            const latAndLong = await getCordinates

            const supplier = await Supplier.create({
                user: req.user._id,
                name,
                email,
                address,
                cropSelection,
                storage,
                longitude: latAndLong.longitude,
                latitude: latAndLong.latitude,
                image,
                phonenumber,
                description,
            })
            const createdSupplierProduct = await supplier.save()

            res.status(201).json(createdSupplierProduct)
        }

        getLatLong()
    }
})

// @desc    Get logged in user products
// @route   GET /api/supplier/myproducts
// @access  Private
const getMyProducts = asyncHandler(async (req, res) => {
    const products = await Supplier.find({ user: req.user._id })
    res.json(products)
})

// @desc    Get all Products
// @route   GET /api/supplier
// @access  Public
const getMyProductsForPublic = asyncHandler(async (req, res) => {
    const products = await Supplier.find({}).populate('user', 'id name')
    res.json(products)
})

// @desc    Get all Products
// @route   GET /api/supplier
// @access  Private/Admin
const getProducts = asyncHandler(async (req, res) => {
    const products = await Supplier.find({}).populate('user', 'id name')
    res.json(products)
})

// @desc    Fetch product by id
// @rout    GET /supplier/:id
// @access  public
const getFarmerProductById = asyncHandler(async (req, res) => {
    const product = await Supplier.findById(req.params.id);

    if (product) {
        res.json(product);
    } else {
        res.status(404)
        throw new Error('Product not Found')
    }
})

// @desc    Update Product Review
// @rout    POST /supplier/product/:id/review
// @access  private/ Admin
const createFarmerProductReview = asyncHandler(async (req, res) => {
    const { rating, comment } = req.body

    const product = await Supplier.findById(req.params.id)

    if (product) {
        const alreadyReviewed = product.reviews.find(r => r.user.toString() === req.user._id.toString())
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

        product.reviews.push(review)

        product.isReviwed = true

        product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length

        await product.save()

        res.status(201).json({ message: 'Review added' })

    } else {
        res.status(401)
        throw new Error('Product not found')
    }
})

// @desc    update product reviewed
// @rout    PUT /supplier/product/:id/review
// @access  Private/Admin
const updateProductReviewed = asyncHandler(async (req, res) => {
    const product = await Supplier.findById(req.params.id)

    if (product) {
        product.isAdmin = req.body.isAdmin

        const updatedProduct = await product.save()

        res.json({
            _id: updatedProduct._id,
            isAdmin: updatedProduct.isAdmin,
        })
    } else {
        res.status(401)
        throw new Error('Product not found!!')
    }
})

// @desc    update supplier product profile
// @rout    PUT /api/supplier/product/:id/edit
// @access  Private
const updateSupplierProductProfile = asyncHandler(async (req, res) => {
    const product = await Supplier.findById(req.params.id)

    if (product) {
        product.name = req.body.name || product.name
        product.email = req.body.email || product.email
        product.address = req.body.address || product.address
        product.storage = req.body.storage || product.storage
        product.image = req.body.image || product.image
        product.phonenumber = req.body.phonenumber || product.phonenumber
        product.description = req.body.description || product.description
        product.cropSelection = req.body.cropSelection || product.cropSelection

        let options = {
            provider: 'openstreetmap'
        };

        let geoCoder = nodeGeocoder(options);

        const getCordinates = geoCoder.geocode(product.address).then(
            response => {
                return response[0]
            }).catch((err) => {
                console.log(err);
            });

        const getLatLong = async () => {
            const latAndLong = await getCordinates

            product.longitude = req.body.longitude || latAndLong.longitude
            product.latitude = req.body.latitude || latAndLong.latitude

        }

        getLatLong()

        const updatedproduct = await product.save()

        res.json({
            _id: updatedproduct._id,
            name: updatedproduct.name,
            email: updatedproduct.email,
            address: updatedproduct.address,
            storage: updatedproduct.storage,
            image: updatedproduct.image,
            phonenumber: updatedproduct.phonenumber,
            description: updatedproduct.description,
            longitude: updatedproduct.longitude,
            latitude: updatedproduct.latitude,
            cropSelection: updatedproduct.cropSelection,
            token: generateToken(updatedproduct._id)
        })

    } else {
        res.status(401)
        throw new Error('User not found!!')
    }
})

export {
    createSupplierProduct,
    getMyProducts,
    getProducts,
    getFarmerProductById,
    createFarmerProductReview,
    updateProductReviewed,
    getMyProductsForPublic,
    updateSupplierProductProfile
}