const express = require("express")
const router = express.Router()
const leaseController = require("../controllers/leaseController")

router.post("/", leaseController.createLease)
router.get("/", leaseController.getLeases)
router.get("/:id", leaseController.getLeaseById)
router.put("/:id", leaseController.updateLease)
router.delete("/:id", leaseController.deleteLease)

// Filters
router.get("/property/:propertyId", leaseController.getLeasesByProperty)
router.get("/tenant/:tenantId", leaseController.getLeasesByTenant)
router.get("/active", leaseController.getActiveLeases)

module.exports = router