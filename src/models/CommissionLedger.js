const mongoose = require("mongoose")

const commissionLedgerSchema = new mongoose.Schema({

    referral: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Referral"
    },

    amount: Number,

    status: {
        type: String,
        enum: ["eligible","paid"],
        default: "eligible"
    },

    eligible_at: Date,

    paid_on: Date

})

module.exports = mongoose.model("CommissionLedger", commissionLedgerSchema)