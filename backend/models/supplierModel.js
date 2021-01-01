import mongoose from 'mongoose'

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
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: false
    },
    latitude: {
        type: String,
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
    }
}, {
    timestamps: true
})

const Supplier = mongoose.model('Supplier', supplierSchema);

export default Supplier;