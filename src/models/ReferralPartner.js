const mongoose = require("mongoose")

const referralPartnerSchema = new mongoose.Schema({

    name: String,

    email: String,

    phone: String,

    vip_status: {
        type: Boolean,
        default: false
    }

}, { timestamps: { createdAt: "created_at" } })

module.exports = mongoose.model("ReferralPartner", referralPartnerSchema)