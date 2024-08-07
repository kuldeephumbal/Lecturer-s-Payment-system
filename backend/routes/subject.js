const express = require("express");
const router = express.Router();
const subjectController = require("../controllers/subject.js");
const { route } = require("./login.js");

router.route("/subjects")
    .post(subjectController.insertSubject)
    .get(subjectController.getAllSubjects);

router.route("/subjects/:id")
    .put(subjectController.updateSubject)
    .delete(subjectController.deleteSubject);    

module.exports = router;
