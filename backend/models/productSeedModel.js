import mongoose from 'mongoose'

const seedReviewSchema = mongoose.Schema({
    name: {
        type: String,
        requried: true,
    },
    rating: {
        type: Number,
        requried: true,
    },
    comment: {
        type: String,
        requried: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
}, {
    timestamps: true
})

const productSeedSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    reviews: [seedReviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        default: 0
    },
}, {
    timestamps: true
})

const farmer_product_seeds = mongoose.model('farmer_product_seeds', productSeedSchema);

export default farmer_product_seeds;