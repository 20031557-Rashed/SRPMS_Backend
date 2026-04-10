const express = require("express")
const router = express.Router()
const propertyController = require("../controllers/propertyController")
const authMiddleware = require("../middleware/authMiddleware")
const roleMiddleware = require("../middleware/roleMiddleware")
const upload = require("../middleware/uploadMiddleware")

router.post("/", authMiddleware.protect, roleMiddleware.authorizeRoles("admin", "landlord"), upload.array("images", 8), propertyController.createProperty)
router.get("/", authMiddleware.optional, propertyController.getProperties)
router.get("/:id", propertyController.getPropertyById)
router.put("/:id", authMiddleware.protect, roleMiddleware.authorizeRoles("admin", "landlord"), upload.array("images", 8), propertyController.updateProperty)
router.delete("/:id", authMiddleware.protect, roleMiddleware.authorizeRoles("admin", "landlord"), propertyController.deleteProperty)

// Extra: landlord’s properties
router.get("/landlord/:landlordId", authMiddleware.protect, roleMiddleware.authorizeRoles("admin", "landlord"), propertyController.getPropertiesByLandlord)

module.exports = router