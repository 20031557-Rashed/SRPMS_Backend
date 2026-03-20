const express = require("express")
const router = express.Router()
const serviceInvoiceController = require("../controllers/serviceInvoiceController")

router.post("/", serviceInvoiceController.createInvoice)
router.get("/", serviceInvoiceController.getInvoices)
router.get("/:id", serviceInvoiceController.getInvoiceById)
router.put("/:id", serviceInvoiceController.updateInvoice)

// Filters
router.get("/job/:jobId", serviceInvoiceController.getInvoicesByJob)

module.exports = router