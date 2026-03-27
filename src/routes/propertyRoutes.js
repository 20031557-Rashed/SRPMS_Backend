const express = require("express")
const router = express.Router()
const propertyController = require("../controllers/propertyController")
const authMiddleware = require("../middleware/authMiddleware")
const roleMiddleware = require("../middleware/roleMiddleware")

router.post("/", authMiddleware.protect, roleMiddleware.authorizeRoles("admin", "landlord"), propertyController.createProperty)
router.get("/", propertyController.getProperties)
router.get("/:id", propertyController.getPropertyById)
router.put("/:id", authMiddleware.protect, roleMiddleware.authorizeRoles("admin", "landlord"), propertyController.updateProperty)
router.delete("/:id", authMiddleware.protect, roleMiddleware.authorizeRoles("admin", "landlord"), propertyController.deleteProperty)

// Extra: landlord’s properties
router.get("/landlord/:landlordId", authMiddleware.protect, roleMiddleware.authorizeRoles("admin", "landlord"), propertyController.getPropertiesByLandlord)

module.exports = router