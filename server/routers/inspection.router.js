var express = require('express')
var router = express.Router();

//Controllers
const inspectionController = require("../controllers/inspection.controller")

router.post("/",inspectionController.postInspection)
router.get("/:inspectionID",inspectionController.getInspection)
router.get("/",inspectionController.getInspections)
router.put("/:inspectionID",inspectionController.updateInspection)

module.exports = router;