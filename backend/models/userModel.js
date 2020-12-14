import mongose, { Mongoose } from 'mongoose'

const userSchema = mongose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    id: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }, 
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema);

export default User;