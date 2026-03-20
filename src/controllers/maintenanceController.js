const MaintenanceRequest = require("../models/MaintenanceRequest")

exports.createRequest = async (req, res) => {

    const request = new MaintenanceRequest(req.body)

    await request.save()

    res.status(201).json(request)
}

exports.getRequests = async (req, res) => {

    const requests = await MaintenanceRequest.find()
    .populate("tenant")
    .populate("property")

    res.json(requests)
}

exports.getRequestById = async (req, res) => {

    const request = await MaintenanceRequest.findById(req.params.id)

    res.json(request)
}

exports.updateRequest = async (req, res) => {

    const request = await MaintenanceRequest.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.json(request)
}

exports.deleteRequest = async (req, res) => {

    await MaintenanceRequest.findByIdAndDelete(req.params.id)

    res.json({ message: "Request deleted" })
}