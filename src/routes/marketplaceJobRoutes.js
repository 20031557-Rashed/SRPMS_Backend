const express = require("express")
const router = express.Router()
const marketplaceJobController = require("../controllers/marketplaceJobController")

router.post("/", marketplaceJobController.createJob)
router.get("/", marketplaceJobController.getJobs)
router.get("/:id", marketplaceJobController.getJobById)
router.put("/:id", marketplaceJobController.updateJob)
router.delete("/:id", marketplaceJobController.deleteJob)

// Filters
router.get("/request/:requestId", marketplaceJobController.getJobsByRequest)
router.get("/provider/:providerId", marketplaceJobController.getJobsByProvider)

module.exports = router