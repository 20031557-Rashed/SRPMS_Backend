const mongoose = require("mongoose")

const paymentSchema = new mongoose.Schema({

    payer_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    payee_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    lease: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lease"
    },

    amount: Number,

    currency: String,

    status: {
        type: String,
        enum: ["pending","paid"]
    }

}, { timestamps: { createdAt: "created_at" } })

module.exports = mongoose.model("Payment", paymentSchema)