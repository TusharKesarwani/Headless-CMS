const express = require("express");
const router = express.Router();
const entityController = require("../controllers/entityController");

router.post("/entity", entityController.createEntity);
router.post("/entity/entry", entityController.addEntry);
router.get("/entity/:entityName", entityController.getEntries);
router.put("/entity/entry", entityController.updateEntry);
router.delete("/entity/:entityName/:id", entityController.deleteEntry);

module.exports = router;
