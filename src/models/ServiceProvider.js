const mongoose = require("mongoose")

const serviceProviderSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    business_name: String,

    ABN: String,

    rating: {
        type: Number,
        default: 0
    },

    verification_status: {
        type: String,
        enum: ["pending","verified","rejected"],
        default: "pending"
    }

}, { timestamps: { createdAt: "created_at" } })

module.exports = mongoose.model("ServiceProvider", serviceProviderSchema)