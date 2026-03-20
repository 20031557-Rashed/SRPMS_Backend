const mongoose = require("mongoose")

const referralSchema = new mongoose.Schema({

    referral_partner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ReferralPartner"
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    code: String,

    status: {
        type: String,
        enum: ["pending","converted","expired"],
        default: "pending"
    }

}, { timestamps: { createdAt: "created_at" } })

module.exports = mongoose.model("Referral", referralSchema)