import mongoose from 'mongoose'

const farmerProductReviewSchema = mongoose.Schema({
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

const supplierSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    storage: {
        type: String,
        required: true
    },
    reviews: [farmerProductReviewSchema],
    longitude: {
        type: Number,
        required: false
    },
    latitude: {
        type: Number,
        required: false
    },
    cropSelection: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        requried: true
    },
    isReviwed: {
        type: Boolean,
        required: true,
        default: false
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
}, {
    timestamps: true
})

const Supplier = mongoose.model('Supplier', supplierSchema);

export default Supplier;