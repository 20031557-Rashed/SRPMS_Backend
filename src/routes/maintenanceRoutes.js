const express = require("express")
const router = express.Router()
const maintenanceController = require("../controllers/maintenanceController")

router.post("/", maintenanceController.createRequest)
router.get("/", maintenanceController.getRequests)
router.get("/:id", maintenanceController.getRequestById)
router.put("/:id", maintenanceController.updateRequest)
router.delete("/:id", maintenanceController.deleteRequest)

// Filters
router.get("/property/:propertyId", maintenanceController.getRequestsByProperty)
router.get("/tenant/:tenantId", maintenanceController.getRequestsByTenant)

module.exports = router