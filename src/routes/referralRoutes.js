const express = require("express")
const router = express.Router()
const referralController = require("../controllers/referralController")

router.post("/", referralController.createReferral)
router.get("/", referralController.getReferrals)
router.get("/:id", referralController.getReferralById)
router.get("/code/:code", referralController.getReferralByCode)

module.exports = router