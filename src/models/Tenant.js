const mongoose = require("mongoose")

const tenantSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    emergency_contact: String

}, { timestamps: { createdAt: "created_at" } })

module.exports = mongoose.model("Tenant", tenantSchema)