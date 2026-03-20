const express = require("express")
const router = express.Router()
const payoutController = require("../controllers/payoutController")

router.post("/", payoutController.createPayout)
router.get("/", payoutController.getPayouts)
router.get("/:id", payoutController.getPayoutById)
router.put("/:id", payoutController.updatePayout)
router.get("/partner/:partnerId", payoutController.getByPartner)

module.exports = router