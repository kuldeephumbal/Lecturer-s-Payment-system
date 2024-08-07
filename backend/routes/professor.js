const express = require("express");
const router = express.Router();
const professorController = require("../controllers/professor.js");

router.route("/professors")
    .post(professorController.insertProfessor)
    .get(professorController.getProfessors);

router.route("/professors/:id")
    .put(professorController.updateProfessor)
    .delete(professorController.deleteProfessor);



module.exports = router;
