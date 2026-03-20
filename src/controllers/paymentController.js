const Payment = require("../models/Payment")

exports.createPayment = async (req, res) => {

    const payment = new Payment(req.body)

    await payment.save()

    res.status(201).json(payment)
}

exports.getPayments = async (req, res) => {

    const payments = await Payment.find()
    .populate("payer_user")
    .populate("payee_user")
    .populate("lease")

    res.json(payments)
}

exports.getPaymentById = async (req, res) => {

    const payment = await Payment.findById(req.params.id)

    res.json(payment)
}

exports.updatePayment = async (req, res) => {

    const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.json(payment)
}

exports.getPaymentsByLease = async (req, res) => {

    const payments = await Payment.find({ lease: req.params.leaseId })

    res.json(payments)
}

exports.getPaymentsByUser = async (req, res) => {

    const payments = await Payment.find({ payer_user: req.params.userId })

    res.json(payments)
}