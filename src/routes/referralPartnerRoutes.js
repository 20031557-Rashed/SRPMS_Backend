const express = require("express")
const router = express.Router()
const referralPartnerController = require("../controllers/referralPartnerController")

router.post("/", referralPartnerController.createPartner)
router.get("/", referralPartnerController.getPartners)
router.get("/:id", referralPartnerController.getPartnerById)
router.put("/:id", referralPartnerController.updatePartner)

module.exports = router