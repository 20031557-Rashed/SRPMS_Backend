const mongoose = require("mongoose")

const leaseSchema = new mongoose.Schema({

    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property"
    },

    tenant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tenant"
    },

    start_date: Date,

    end_date: Date,

    rent_amount: Number,

    bond_amount: Number,

    status: {
        type: String,
        enum: ["active","terminated"]
    }

}, { timestamps: { createdAt: "created_at" } })

module.exports = mongoose.model("Lease", leaseSchema)