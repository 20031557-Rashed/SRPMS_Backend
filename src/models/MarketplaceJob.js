const mongoose = require("mongoose")

const marketplaceJobSchema = new mongoose.Schema({

    request: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MaintenanceRequest"
    },

    service_provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ServiceProvider"
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ServiceCategory"
    },

    description: String,

    scheduled_at: Date,

    status: {
        type: String,
        enum: ["open","assigned","completed","cancelled"],
        default: "open"
    }

}, { timestamps: { createdAt: "created_at" } })

module.exports = mongoose.model("MarketplaceJob", marketplaceJobSchema)