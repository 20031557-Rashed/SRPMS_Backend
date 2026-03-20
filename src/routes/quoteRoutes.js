const express = require("express")
const router = express.Router()
const jobQuoteController = require("../controllers/jobQuoteController")

router.post("/", jobQuoteController.createQuote)
router.get("/", jobQuoteController.getQuotes)
router.get("/:id", jobQuoteController.getQuoteById)
router.put("/:id", jobQuoteController.updateQuote)

// Actions
router.put("/:id/accept", jobQuoteController.acceptQuote)
router.put("/:id/reject", jobQuoteController.rejectQuote)

module.exports = router