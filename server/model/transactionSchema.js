const mongoose = require('mongoose')

// sample schema for the transaction 
const transactionSchema = mongoose.Schema ({
    type: {
        type: String,
        required: true,
        trim: true
    },
    amount: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
    }
})


module.exports = mongoose.model('Transaction', transactionSchema)