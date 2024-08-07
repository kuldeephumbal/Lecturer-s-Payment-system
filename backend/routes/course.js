const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course.js");

router.route("/courses")
    .post(courseController.insertCourses)
    .get(courseController.getAllCourses)


router.route("/courses/:id")
    .put(courseController.updateCourse)
    .delete(courseController.deleteCourse);

module.exports = router;
