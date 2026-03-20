const mongoose = require("mongoose")

const propertySchema = new mongoose.Schema({

    landlord: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Landlord"
    },

    address: String,

    state: String,

    postcode: String,

    type: {
        type: String,
        enum: ["house","apartment","commercial"]
    },

    bedrooms: Number,

    bathrooms: Number,

    parking_spaces: Number

}, { timestamps: { createdAt: "created_at" } })

module.exports = mongoose.model("Property", propertySchema)