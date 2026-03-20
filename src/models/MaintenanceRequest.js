const mongoose = require("mongoose")

const maintenanceSchema = new mongoose.Schema({

    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property"
    },

    tenant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tenant"
    },

    description: String,

    priority: {
        type: String,
        enum: ["low","medium","high"]
    },

    status: String

}, { timestamps: { createdAt: "created_at" } })

module.exports = mongoose.model("MaintenanceRequest", maintenanceSchema)