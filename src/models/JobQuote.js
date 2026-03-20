const mongoose = require("mongoose")

const jobQuoteSchema = new mongoose.Schema({

    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MarketplaceJob"
    },

    service_provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ServiceProvider"
    },

    price: Number,

    status: {
        type: String,
        enum: ["pending","accepted","rejected"],
        default: "pending"
    }

}, { timestamps: { createdAt: "created_at" } })

module.exports = mongoose.model("JobQuote", jobQuoteSchema)