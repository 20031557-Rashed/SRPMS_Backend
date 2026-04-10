const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const authMiddleware = require("../middleware/authMiddleware")
const roleMiddleware = require("../middleware/roleMiddleware")

router.get("/", userController.getAllUsers)
router.get("/:id", userController.getUserById)
router.post("/", authMiddleware.protect, roleMiddleware.authorizeRoles("admin"), userController.createUser)
router.put("/:id", authMiddleware.protect, roleMiddleware.authorizeRoles("admin"), userController.updateUser)
router.delete("/:id", authMiddleware.protect, roleMiddleware.authorizeRoles("admin"), userController.deleteUser)

module.exports = router