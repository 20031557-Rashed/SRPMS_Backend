const express = require("express")
const router = express.Router()
const commissionController = require("../controllers/commissionController")

router.get("/", commissionController.getCommissions)
router.get("/:id", commissionController.getCommissionById)
router.put("/:id", commissionController.updateCommission)
router.get("/referral/:referralId", commissionController.getByReferral)

module.exports = router