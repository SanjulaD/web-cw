import mongoose from 'mongoose'

const consumerProductReviewSchema = mongoose.Schema({
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
    }
}, {
    timestamps: true
})

const consumerProductSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    prod_name: {
        type: String,
        required: true
    },
    seller_name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    prod_size: {
        type: String,
        required: true,
    },
    reviews: [consumerProductReviewSchema],
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    avalaible_location: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const consumer_products = mongoose.model('consumer_products', consumerProductSchema);

export default consumer_products;