const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment.js');

router.route("/payments")
    .post(paymentController.insertPayment)
    .get(paymentController.getPayments);

router.route("/payments/:id")
    .put(paymentController.updatePayment)
    .delete(paymentController.deletePayment);    

module.exports = router;
