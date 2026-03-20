const mongoose = require("mongoose")

const serviceInvoiceSchema = new mongoose.Schema({

    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MarketplaceJob"
    },

    total: Number,

    status: {
        type: String,
        enum: ["unpaid","paid"],
        default: "unpaid"
    },

    issued_at: Date

})

module.exports = mongoose.model("ServiceInvoice", serviceInvoiceSchema)