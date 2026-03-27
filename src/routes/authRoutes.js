const express = require("express")
const router = express.Router()
const authController = require("../controllers/authController")
const authMiddleware = require("../middleware/authMiddleware")
const roleMiddleware = require("../middleware/roleMiddleware")

// Auth endpoints
router.post("/register", authController.register)
router.post("/login", authController.login)
router.get("/profile", authMiddleware.protect, roleMiddleware.authorizeRoles("admin", "landlord", "tenant"), authController.getProfile)

module.exports = router