const express = require("express")
const router = express.Router()
const serviceCategoryController = require("../controllers/serviceCategoryController")

router.post("/", serviceCategoryController.createCategory)
router.get("/", serviceCategoryController.getCategories)
router.put("/:id", serviceCategoryController.updateCategory)
router.delete("/:id", serviceCategoryController.deleteCategory)

module.exports = router