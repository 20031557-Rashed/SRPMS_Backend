require("dotenv").config()
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const connectDB = require("./config/db")

// import models
const User = require("./src/models/User")
const Property = require("./src/models/Property")

const seedData = async () => {
    try {

        await connectDB()

        // Clear existing data
        await User.deleteMany()
        await Property.deleteMany()

        // Hash password once
        const hashedPassword = await bcrypt.hash("123456", 10)

        // Insert users (including admin)
        const users = await User.insertMany([
            {
                email: "admin@test.com",
                password_hash: hashedPassword,
                role: "admin",
                first_name: "Admin",
                last_name: "User"
            },
            {
                email: "landlord@test.com",
                password_hash: hashedPassword,
                role: "landlord"
            },
            {
                email: "tenant@test.com",
                password_hash: hashedPassword,
                role: "tenant"
            }
        ])

        // Insert property (linked to landlord)
        await Property.create({
            landlord: users[1]._id,
            address: "Kathmandu",
            state: "Bagmati",
            postcode: "44600",
            type: "house",
            bedrooms: 3,
            bathrooms: 2,
            parking_spaces: 1
        })

        console.log("🌱 Data seeded successfully")
        console.log("👤 Admin login: admin@test.com / 123456")

        process.exit()

    } catch (error) {

        console.error(error)
        process.exit(1)

    }
}

seedData()