const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.register = async (req, res) => {
    try {
        const { email, password, first_name, last_name, role } = req.body

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" })
        }

        if (role === "admin") {
            return res.status(403).json({ message: "Cannot register as admin" })
        }

        const password_hash = await bcrypt.hash(password, 10)

        const user = new User({
            email,
            password_hash,
            first_name,
            last_name,
            role
        })

        await user.save()

        res.status(201).json({
            success: true,
            message: "Registration successful",
            user
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email }).select("+password_hash")

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        const validPassword = await bcrypt.compare(password, user.password_hash)

        if (!validPassword) {
            return res.status(401).json({ message: "Invalid password" })
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        )

        user.password_hash = undefined

        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
        res.status(200).json({
            success: true,
            message: "Profile fetched successfully",
            user
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}