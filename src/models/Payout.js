const mongoose = require("mongoose")

const payoutSchema = new mongoose.Schema({

    referral_partner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ReferralPartner"
    },

    amount: Number,

    status: {
        type: String,
        enum: ["pending","processed"],
        default: "pending"
    },

    processed_on: Date

})

module.exports = mongoose.model("Payout", payoutSchema)