const express = require('express');
const router = express.Router();
const reportController = require('../controllers/report.js');

router.post('/reports/batch-lectures', reportController.getBatchWiseLectureDetails);

module.exports = router;
