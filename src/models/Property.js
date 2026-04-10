const mongoose = require("mongoose")

const propertySchema = new mongoose.Schema({

    landlord: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Landlord"
    },

    street_address: String,

    suburb: String,

    address: String,

    state: String,

    postcode: String,

    type: {
        type: String,
        enum: ["house","apartment","commercial","townhouse","land"]
    },

    bedrooms: Number,

    bathrooms: Number,

    parking_spaces: Number,

    property_value: Number,

    weekly_rent: Number,

    status: {
        type: String,
        enum: ["available", "rented", "maintenance", "sold"],
    },

    description: String,

    features: [String],

    images: [String]

}, { timestamps: { createdAt: "created_at" } })

module.exports = mongoose.model("Property", propertySchema)