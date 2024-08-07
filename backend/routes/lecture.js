const express = require('express');
const router = express.Router();
const lectureController = require('../controllers/lecture.js');

router.route("/lectures")
    .post(lectureController.insertLecture)
    .get(lectureController.getLectures);

// router.route("/lectures/:id")
//     .put(lectureController.updateLecture)
//     .delete(lectureController.deleteLecture);

module.exports = router;
