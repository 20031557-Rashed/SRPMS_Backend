const express = require("express")
const router = express.Router()
const propertyController = require("../controllers/propertyController")

router.post("/", propertyController.createProperty)
router.get("/", propertyController.getProperties)
router.get("/:id", propertyController.getPropertyById)
router.put("/:id", propertyController.updateProperty)
router.delete("/:id", propertyController.deleteProperty)

// Extra: landlord’s properties
router.get("/landlord/:landlordId", propertyController.getPropertiesByLandlord)

module.exports = router