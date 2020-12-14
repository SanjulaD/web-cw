import mongose from 'mongoose'

const seedReviewSchema = mongose.Schema({
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

const productSeedSchema = mongose.Schema({
    user: {
        type: mongose.Schema.Types.ObjectId,
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
        required: true,
        default: 0
    },
}, {
    timestamps: true
})

const productSeed = mongoose.model('productSeed', productSeedSchema);

export default productSeed;