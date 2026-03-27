const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },

    password_hash: {
        type: String,
        required: true,
        select: false
    },

    first_name: String,

    last_name: String,

    role: {
        type: String,
        enum: ["admin","landlord","tenant","service_provider"]
    },

    phone: String

}, { timestamps: { createdAt: "created_at" } })

module.exports = mongoose.model("User", userSchema)