const express = require("express");
const router = express.Router();
const batchController = require("../controllers/batch.js");

router.route("/batches")
    .post(batchController.insertBatch)
    .get(batchController.getAllBatches);

router.route("/batches/:id")
    .put(batchController.updateBatch)
    .delete(batchController.deleteBatch);
    
module.exports = router;
