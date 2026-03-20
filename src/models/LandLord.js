const mongoose = require("mongoose")

const landlordSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    company_name: String,

    ABN: String

}, { timestamps: { createdAt: "created_at" } })

module.exports = mongoose.model("Landlord", landlordSchema)